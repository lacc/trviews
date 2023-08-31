
var defaultSettings = {
    "autosize": true,
    //"symbol": "BINANCE:ETHBUSD",
    "interval": 2,
    "theme": "dark",
    "allow_symbol_change": true,
    "hide_side_toolbar": false,
    "studies": [
       // "STD;MA%1Cross",
        "STD;RSI"
    ],
    "studies_overrides": {
        "rsi.rsi.plot.color": "#2196f3",
        "rsi.period": 14,
        "rsi.level.0": 30,
        "rsi.level.1": 70,
        "MA Cross.shortLength": 20,
        "MA Cross.longLength": 50
    }
}

var containers = [
    {
        "container_id": "chart1",
        "symbol": "BINANCE:BTCBUSD",
        "interval": 1
    },
    {
        "container_id": "chart2",
        "symbol": "BINANCE:ETHBUSD",
        "interval": 1
    },
    {
        "container_id": "chart3",
        "symbol": "NASDAQ:TSLA",
        "interval": 1
    },
    {
        "container_id": "chart4",
        "symbol": "BINANCE:SHIBBUSD",
        "interval": 1
    }
]

for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var settings = { ...defaultSettings, ...container };  // Merge settings

    var tv = new TradingView.widget({
        ...settings,
        "onChartReady": function() {
            console.log("Chart is ready");
        }
    });

}

// tv = new TradingView.widget({
//     "autosize": true,
//     "symbol": "BINANCE:ETHBUSD",
//     "interval": 1,
//     "theme": "dark",
//     "allow_symbol_change": true,
//     "hide_side_toolbar": false,
//     "studies": [
//         "STD;MA%1Cross",
//         "STD;RSI"
//     ],
//     "studies_overrides": {
//         "rsi.rsi.plot.color": "#2196f3",
//         "rsi.period": 14,
//         "rsi.level.0": 30,
//         "rsi.level.1": 70,
//         "MA Cross.shortLength": 20,
//         "MA Cross.longLength": 50
//     },
//     "container_id" : "chart2",
// });