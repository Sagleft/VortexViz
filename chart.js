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
    pairsData = filterByPriceChange(pairsData, priceChangeFrom, priceChangeTo);

    // find range min, max
    const min = Math.min(...pairsData.map(item => item.avgRange));
    const max = Math.max(...pairsData.map(item => item.avgRange));

    // convert to chart data
    return convertToXYZArray(pairsData, min, max);
}

function filterByPriceChange(data = [], minChange = -100, maxChange = 100) {
    return data.filter(item => {
        return item.priceChange >= minChange && 
        item.priceChange <= maxChange &&
        'baseAsset' in item;
    });
}

/* [{ x: 6.797970903047371, y: -1.3443262634527144, z: 0.45968315271284194, name: 'ZEN' }] */
function convertToXYZArray(data = [], min = 0, max = 100) {
    return data.map(item => ({
        x: item.pumpDump,
        y: item.priceChange,
        z: scaleBubbleSize(item.avgRange, min, max),
        name: item.baseAsset
    }));
}

function scaleBubbleSize(value = 1, min = 0, max = 100) {
   return rangeScale * Math.exp(value - 0.5)
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
            /*labels: {
                format: '{value} gr'
            },*/
            /*plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }*/
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Price change 24h, %'
            },
            /*labels: {
                format: '{value} gr'
            },*/
            maxPadding: 0.2,
            /*plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }*/
        },

        tooltip: {
            enabled: false
        },

        /*tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.value}</h3></th></tr>' +
                '<tr><th>X:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Y:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Z:</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },*/

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: chartData,
            colorByPoint: true
        }]
    
    });
}

loadChart();
