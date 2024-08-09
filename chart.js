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
    pairsData = filterPairs(pairsData, priceChangeFrom, priceChangeTo);

    // convert to chart data
    return convertPairDataToBubbles(pairsData);
}

function filterPairs(data = [], minChange = -100, maxChange = 100) {
    return data.filter(item => {
        return item.priceChange >= minChange && 
        item.priceChange <= maxChange &&
        'baseAsset' in item &&
        item.pumpDump >= 0 &&
        item.avgRange >= 0;
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
function convertPairDataToBubbles(data = []) {
    const maxPriceChange = Math.max(...data.map(item => item.priceChange));
    const minAvgRange = Math.min(...data.map(item => item.avgRange));
    const maxAvgRange = Math.max(...data.map(item => item.avgRange));
    const maxPumpDump = Math.max(...data.map(item => item.pumpDump));

    return data.map(item => ({
        x: item.pumpDump,
        y: item.priceChange,
        z: scaleBubbleSize(item.avgRange, minAvgRange, maxAvgRange),
        name: item.baseAsset,
        color: getCircleColor(item, maxPriceChange, maxPumpDump, maxAvgRange),
    }));
}

function scaleBubbleSize(value = 1, min = 0, max = 100) {
   return rangeScale * Math.exp(value - 0.5)
}

function getCircleColor(data = {}, maxPriceChange = 100, maxPumpDump = 100, maxAvgRange = 2) {
    // Нормализуем значения
    const normalizedPriceChange = Math.abs(data.priceChange) / maxPriceChange;
    const normalizedPumpDump = data.pumpDump / maxPumpDump;
    const normalizedAvgRange = data.avgRange / maxAvgRange;

    // Вычисляем значения R, G, B
    const red = Math.round(255 * normalizedPriceChange);
    const green = Math.round(255 * normalizedPumpDump);
    const blue = Math.round(255 * normalizedAvgRange);

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
                text: 'Pump Dump'
            },
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Price change 24h, %'
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
                }
            }
        },

        series: [{
            type: 'bubble',
            data: chartData,
            //colorByPoint: true,
        }]
    
    });
}

loadChart();
