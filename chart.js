function csvToArray(csvString) {
    // Разделяем CSV на строки
    const lines = csvString.trim().split('\n');

    // Получаем заголовки из первой строки
    const headers = lines[0].split(',');

    // Создаем массив объектов
    const result = [];

    // Проходим по остальным строкам
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const obj = {};

        // Создаем объект из заголовков и значений
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j].replace(/"/g, '').trim();
            const value = values[j].replace(/"/g, '').trim();

            // Преобразуем в число только если это число
            obj[header] = isNaN(value) ? value : parseFloat(value);
        }

        result.push(obj);
    }

    return result;
}

function loadChartData() {
    // load pairs
    var pairsData = csvToArray(volatilityData);

    // filter pairs
    pairsData = filterPairsByParams(pairsData);

    const maxPriceChange = Math.max(...pairsData.map(item => item.priceChange));
    const maxAvgRange = Math.max(...pairsData.map(item => item.avgRange));
    const maxPumpDump = Math.max(...pairsData.map(item => item.pumpDump));

    pairsData = filterPairsByWhitelist(pairsData);

    // convert to chart data
    return convertPairDataToBubbles(pairsData, maxPriceChange, maxPumpDump, maxAvgRange);
}

function filterPairsByParams(data = []) {
    return data.filter(item => {
        return item.priceChange >= priceChangeFrom && 
        item.priceChange <= priceChangeTo &&
        'baseAsset' in item &&
        item.pumpDump >= 0 &&
        item.avgRange >= 0 &&
        isAssetInWhiteList(item.baseAsset);
    });
}

function filterPairsByWhitelist(data = []) {
    return data.filter(item => {
        return isAssetInWhiteList(item.baseAsset);
    });
}

/*
[{
    x: 6.797970903047371,
    y: -1.3443262634527144,
    z: 0.45968315271284194,
    name: 'ZEN',
    fillColor: '#dfdfdf'
}]
*/
function convertPairDataToBubbles(data = [], maxPriceChange = 100, maxPumpDump = 100, maxAvgRange = 2) {
    return data.map(item => ({
        x: item.avgRange,
        y: item.pumpDump,
        z: gaussian(item.priceChange, 0.5),
        name: item.baseAsset,
        color: getCircleColor(item, maxPriceChange, maxPumpDump, maxAvgRange)
    }));
}

function gaussian(x, c) {
    const a = 1; // максимальное значение по Y
    const b = 0; // пик функции по X
    return a * Math.exp(-((x - b) ** 2) / (2 * c ** 2));
}

function scaleValue(k = 1, value = 1) {
   return k * Math.exp(value - 0.5)
}

function smoothTransition(value) {
    // Убедитесь, что значение находится в диапазоне от 0 до 1
    if (value < 0) return 0;
    if (value > 1) return 1;

    // Используем квадратичную функцию для сглаживания
    return value * value * (3 - 2 * value);
}

function getCircleColor(data = {}, maxPriceChange = 100, maxPumpDump = 100, maxAvgRange = 2) {
    // Нормализуем значения
    const normalizedPriceChange = Math.abs(data.priceChange) / maxPriceChange;
    const normalizedPumpDump = data.pumpDump / maxPumpDump;
    const normalizedAvgRange = data.avgRange / maxAvgRange;

    // Вычисляем значения R, G, B
    const red = Math.floor(255 * smoothTransition(normalizedPriceChange));
    const green = 255 - Math.floor(255 * smoothTransition(normalizedPumpDump));
    const blue = Math.floor(255 * smoothTransition(normalizedAvgRange));

    return rgbToHex(red, green, blue);
}

function rgbToHex(r = 0, g = 0, b = 0) {
    // Проверяем, что значения находятся в диапазоне от 0 до 255
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error("RGB значения должны быть в диапазоне от 0 до 255");
    }

    // Преобразуем каждую компоненту в HEX и добавляем ведущий ноль, если необходимо
    const toHex = (component) => {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    // Собираем итоговую строку в формате HEX
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function loadChart() {
    var chartData = loadChartData();
    const subTitle = 'Source: MatrixBot, ' + new Date().toLocaleDateString("en-EN");

    Highcharts.chart('container', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zooming: {
                type: 'xy'
            }
        },
    
        legend: {
            enabled: false
        },

        title: {
            text: 'Trading Pairs Volatility Rating'
        },

        subtitle: {
            text: subTitle,
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, ' +
                    'sugar: {point.y}g, obesity: {point.z}%.'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Volatility'
            },
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Pump Dump' // old: Price change 24h, %
            },
            maxPadding: 0.2,
        },

        tooltip: {
            enabled: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                },
            }
        },

        series: [{
            data: chartData,
            marker: {
                fillOpacity: 0.8
            },
        }]
    
    });
}

loadChart();
