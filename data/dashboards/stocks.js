export let
    /* Total Amount Invested Chart */
    totalAmountInvestedSeries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }], totalAmountInvestedstocksOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(132, 90, 223)"],

    },
    /* No Of Investments Chart */
    noOfInvastmentsseries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    noOfInvastmentsOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(14, 168, 186)"],

    },
    /* Portfolio Value Chart */
    portfolioSeries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    portfolioOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(245, 184, 73)"],

    },
    /* Returns Rate Chart */
    returnsSeries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    returnsOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],

    },
    /* Total Investments Chart */
    totalInvestmentsSeries = [{
        'name': 'Invested',
        data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.00],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.10],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.10],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.40],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.70],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.40],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.20],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.60],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.70],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.20],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.40],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.10],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.80],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.50],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.90],
            [1348610400000, 32.53],
            [1348696800000, 32.80],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.60],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.40],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.90],
            [1352674800000, 32.70],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.40],
            [1353884400000, 33.30],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.70],
            [1354575600000, 35.30],
            [1354662000000, 35.40],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.30],
            [1356649200000, 36.90],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.10],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.10],
            [1360018800000, 38.51],
            [1360105200000, 38.40],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.60],
        ]
    }],
    totalInvestmentsOptions = {
        chart: {
            id: 'area-datetime',
            fontFamily: 'Roboto, Arial, sans-serif',
            type: 'area',
            height: 320,
            zoom: {
                autoScaleYaxis: true
            },
            toolbar: {
                show: false
            }
        },
        grid: {
            borderColor: '#f3f3f3',
            strokeDashArray: 3
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        colors: ["rgb(132, 90, 223)"],
        stroke: {
            width: [1.2],
            curve: ['smooth']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.7,
                stops: [0, 100]
            }
        },
    },
    /* Market Cap Chart */
    marketCapSeries = [{
        data: [{
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47]
        },
        {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612]
        },
        {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4]
        },
        {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95]
        },
        {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591]
        },
        {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592]
        },
        {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55]
        },
        {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06]
        },
        {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07]
        },
        {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
    }],
    marketCapOptions = {
        chart: {
            type: 'candlestick',
            borderRadius: 20,
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "var(--primary-color)",
                    downward: "rgb(35, 183, 229)"
                }
            }
        },
        title: {
            align: 'left'
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    },

    dropdowns = [
        {
            dropdown1: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },],
            dropdown2: [{ name: "Download" }, { name: "Import" }, { name: "Export" },],
            dropdown3: [{ name: "New" }, { name: "Popular" }, { name: "Relevant" },],
            dropdown4: [{ name: "Day" }, { name: "Month" }, { name: "Year" },],
            dropdown5: [{ name: "Today" }, { name: "This Week" }, { name: "Last Week" },],
            dropdown5: [{ name: "Buy" }, { name: "Sell" },],
        }
    ],
    market = [
        { id: 1, iconColor: "danger", icon: "down", name: "Nifty 50", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
        { id: 2, iconColor: "danger", icon: "down", name: "SENSEX", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
        { id: 3, iconColor: "success", icon: "up", name: "DJIA", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
        { id: 4, iconColor: "danger", icon: "up", name: "S&P 500", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
        { id: 5, iconColor: "success", icon: "up", name: "NASDAQ", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
        { id: 6, iconColor: "success", icon: "up", name: "NIFTY IT", money: "$12,289.44", percentage: "-0.14%", count: "-$1,780.80" },
    ],
    statistics = [
        {
            data: [
                { label: "Symbol", value: "BTC", class: "" },
                { label: "Price Benchmark", value: "128.00%", class: "" },
                { label: "Price (USD)", value: "$4,253.49", class: "text-success fe-semibold" },
                { label: "Change (24H)", value: "-0.24%", class: "text-danger fw-semibold" },
                { label: "Market Cap", value: "$179.12B", class: "" }
            ],
            buttonGroup: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1D" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1W" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "3M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
            ],
            buttonGroup2: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "All" },
            ],
            buttonGroup3: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
            ],
        }
    ],
    stocks = [
        { id: 1, iconBg: "primary", icon: "ti-wallet", name: "Total amount Invested", count: "$23,8998.99", countIcon: "total-invested", chartId: "total-invested", chart: { options: totalAmountInvestedstocksOptions, series: totalAmountInvestedSeries } },
        { id: 2, iconBg: "secondary", icon: "ti-arrow-big-up-line", name: "No Of Investments", count: "116", countIcon: "", chartId: "total-investments", chart: { options: noOfInvastmentsOptions, series: noOfInvastmentsseries } },
        { id: 3, iconBg: "warning", icon: "ti-wallet", name: "Portfolio Value", count: "$12,920.20", countIcon: "ti ti-arrow-narrow-up ms-1 text-success", chartId: "portfolio-value", chart: { options: portfolioOptions, series: portfolioSeries } },
        { id: 4, iconBg: "success", icon: "ti-wallet", name: "Returns Rate", count: "+12.08%", countIcon: "ti ti-arrow-narrow-up ms-1 text-success", chartId: "returns-rate", chart: { options: returnsOptions, series: returnsSeries } },
    ],
    trendingStocks = [
        { id: 1, icon: "bi-apple text-muted fs-18", percentageIconClass: "ti ti-arrow-bear-right ", name: "Apple", count: "$12,289.44", percentage: "0.14%", money: "+$1,780.80", avatarClass: 'avatar-rounded bg-light', percentageIcon: 'trending-icon' },
        { id: 2, icon: "bi-currency-bitcoin text-warning fs-18", percentageIconClass: "ti ti-arrow-bear-right", name: "Bitcoin", count: "$58,151.02", percentage: "2.14%", money: "+$5,745.62", avatarClass: 'avatar-rounded bg-light', percentageIcon: 'trending-icon' },
        { id: 3, icon: "bi-card-list text-success fs-18", percentageIconClass: "ti ti-arrow-bear-right", name: "Tesla", count: "$14,452.36", percentage: "4.02%", money: "+$4,125.63", percentageIcon: 'trending-icon' },
        { id: 4, icon: "bi-gift text-primary fs-18", percentageIconClass: "ti ti-arrow-bear-right", name: "Amazon", count: "$63,251.11", percentage: "5.14%", money: "+$936.30", percentageIcon: 'trending-icon' },
        { id: 5, icon: "bi-truck text-danger fs-18", percentageIconClass: "ti ti-arrow-bear-right", name: "Aliexpress", count: "$5,401.50", percentage: "3.32%", money: "+$4,360.65", percentageIcon: 'trending-icon' },
        { id: 6, icon: "bi-phone text-secondary fs-18", percentageIconClass: "ti ti-arrow-bear-right", name: "Samsung", count: "$10,732.12", percentage: "1.24%", money: "+$3,221.29", percentageIcon: 'trending-icon' },
    ],
    github = [
        { row1: "Open", row2: "125.08", row3: "Volume", row4: "1,253.20" },
        { row1: "High", row2: "	352.15", row3: "Avg. Volume", row4: "1.05M" },
        { row1: "Low", row2: "120.13", row3: "	52 Week High", row4: "2,569.25" },
        { row1: "Dividend Yield", row2: "3.5%", row3: "52 Week Low", row4: "1,586.20" },
        { row1: "P/E Ratio", row2: "25%", row3: "Market Cap", row4: "2.15Cr" },
    ],
    history = [
        { symbol: 'EPA:THI', date: '12-06-2023', action: 'Buy', badge: "primary", profitLoss: '-$1,290', color: "danger", quantity: '+20', color1: "success" },
        { symbol: 'EPA:SCB', date: '11-06-2023', action: 'Buy', badge: "primary", profitLoss: '-$2,150', color: "danger", quantity: '+15', color1: "success" },
        { symbol: 'EPA:CGIO', date: '11-06-2023', action: 'Sell', badge: "warning", profitLoss: '+$22,625', color: "success", quantity: '-12', color1: "danger" },
        { symbol: 'EPA:NTIX', date: '05-06-2023', action: 'Buy', badge: "primary", profitLoss: '-$3,680', color: "danger", quantity: '+36', color1: "success" },
        { symbol: 'EPA:MOD', date: '20-05-2023', action: 'Sell', badge: "warning", profitLoss: '+$30,750', color: "success", quantity: '-25', color1: "danger" },
    ],
    marketDepth = [
        { id: "20", quantity: "2", total: "12,908" },
        { id: "12", quantity: "1", total: "20,632" },
        { id: "36", quantity: "1", total: "19,102" },
        { id: "10", quantity: "3", total: "16,650" },
        { id: "15", quantity: "2", total: "18,850" },
    ],
    MmarketMovers = [
        { symbol: 'APPL', company: 'Apple Inc.', exchange: 'NASDAQ', price: '$1,116.90', change: '$28.9', percentage: '6.8%', marketCap: '12,389.30', changeIcon: "ti-arrow-bear-right", color: "success" },
        { symbol: 'TTR', company: 'Twitter.com Inc.', exchange: 'NYSE', price: '$993.21', change: '$11.6', percentage: '10.25%', marketCap: '32,125.03', changeIcon: "ti-arrow-bear-right", color: "success" },
        { symbol: 'BS', company: 'Bootstrap.com.', exchange: 'NSE', price: '$11.00', change: '$16.0', percentage: '9.0%', marketCap: '27,911.16', changeIcon: "ti-arrow-narrow-down", color: "danger" },
        { symbol: 'NFLX', company: 'Netflix.com Inc.', exchange: 'LSE', price: '$161.72', change: '$9.8', percentage: '17.8%', marketCap: '27,161.89', changeIcon: "ti-arrow-narrow-down", color: "danger" },
        { symbol: 'ION', company: 'Ion.com Corp.', exchange: 'FSX', price: '$52.65', change: '$14.2', percentage: '30.2%', marketCap: '65,785.01', changeIcon: "ti-arrow-bear-right", color: "success" },
    ],
    CryptoStatistics = [
        { height: "320px", type: "area", chart: { options: totalInvestmentsOptions, series: totalInvestmentsSeries } }
    ],
    items = [
        { name: 'GTHB (Gituhb, Demo Inc.)', shares: 16, price: '12,390.02', percentageChange: 0.14, iconClass: 'bi-github text-dark ', isStarred: true, },
        { name: 'TTR (Twitter.com, Inc.)', shares: 289, price: '15,526.01', percentageChange: 2.14, iconClass: 'ri-twitter-x-line text-info', isStarred: false, },
        { name: 'BS (Bootstrap, Inc.)', shares: 325, price: '30,500.15', percentageChange: 2.73, iconClass: 'bi-bootstrap-fill text-primary', isStarred: true, },
        { name: 'MS (Microsoft, Inc.)', shares: 1523, price: '180,520.02', percentageChange: 8.63, iconClass: 'bi-windows text-success', isStarred: false, },
        { name: 'AAPL (Apple, Inc.)', shares: 30, price: '21,093.20', percentageChange: 4.10, iconClass: 'bi-apple text-warning', isStarred: true, },
        { name: 'Bitcoin (Bioset Coin, Inc.)', shares: 118, price: '14,245.23', percentageChange: 0.79, iconClass: 'bi-currency-bitcoin text-danger', isStarred: true, }
    ]