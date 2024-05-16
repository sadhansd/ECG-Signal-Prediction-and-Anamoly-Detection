// Assuming you have canvas element with id "heartbeatChart"

const timeAxis1 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
  114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
  129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
  144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
  159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
  174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
  189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
  204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
  219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
  234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
  249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
  264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
  279,
]; // Replace with actual data
const actualValues1 = [
  0.4437059973432285, 0.4485358776345013, 0.4553053538700754,
  0.4579251999789242, 0.46488241016518556, 0.46756547251977043,
  0.4716730539344923, 0.4754674790863221, 0.4771600551491639,
  0.48242880423506895, 0.48533122204946444, 0.48068863962056124,
  0.4823411272987892, 0.48294143999067324, 0.4836322996595779,
  0.48505854892771544, 0.4856132191120508, 0.4885081143339663,
  0.4904580776570068, 0.49125822340434666, 0.49066961009260723,
  0.49194645143205745, 0.4969520883565716, 0.49958910061283385,
  0.4990119894754777, 0.5025077824514362, 0.5054395151989612,
  0.5099521364090881, 0.5124522114135187, 0.5171514708334335,
  0.5189906450223706, 0.5202784607451375, 0.5261810658567053, 0.528890301100491,
  0.5269724736913852, 0.5273806012956846, 0.5332268730427949,
  0.5347007266638998, 0.5310851936341152, 0.5288333550043467,
  0.5299171469457271, 0.5294483030133731, 0.5276113030559054,
  0.5305136860936376, 0.5307862226617821, 0.5286554088903449,
  0.5295775321281858, 0.5268422964984896, 0.5284103017253668, 0.527408596509643,
  0.5264953006101676, 0.5280594852341738, 0.5240821638139269,
  0.5292563951730764, 0.5272326479837416, 0.527907017856133, 0.5311362966988142,
  0.5414078836708468, 0.549682289650247, 0.556904431769608, 0.563619310023824,
  0.5720831839569842, 0.5806674030855126, 0.5907888887346326,
  0.6006070376981515, 0.5936496004975602, 0.5894489659780179,
  0.5824600158763749, 0.5731983349264818, 0.5644366996140591,
  0.5552850667931359, 0.5490502444951233, 0.5337698285286935,
  0.5165750400490539, 0.5103781546746198, 0.5087171812145408,
  0.5090535212296211, 0.5098446813495764, 0.507764012904571, 0.5103649630030124,
  0.5096054979475835, 0.50860361815853, 0.5117275057710631, 0.5112787246613713,
  0.5126997412147042, 0.5137546878459122, 0.5135085539413511,
  0.5173064056985371, 0.5183226425914267, 0.5294633121796459,
  0.5470476324089025, 0.576998492707651, 0.588322726497027, 0.590377116480818,
  0.6099969230933135, 0.6098135865965, 0.5890493793566224, 0.5617554050731921,
  0.5449627190029321, 0.5453492236648128, 0.47926191251830985,
  0.38452825028422327, 0.32356460081234417, 0.2564159907734752,
  0.2062291807504103, 0.22778575770331383, 0.31447051715906793,
  0.3735605945959329, 0.3620329725272916, 0.3998818090257199,
  0.47399490819968304, 0.46993643571162563, 0.4762182313455701,
  0.4864965740294558, 0.4848888949088704, 0.48011466804308656,
  0.4740910484233848, 0.4717563461131407, 0.4677664112523151,
  0.4641321733457687, 0.46763314142043294, 0.4748693880988131,
  0.46846340044612944, 0.466885222355223, 0.4596277605322022, 0.45087384025693,
  0.4624565971371685, 0.4689669934412593, 0.4631349062946947, 0.458607284198453,
  0.44532920707303236, 0.4512072884268536, 0.4683670269979794,
  0.45034830277324844, 0.45938650709072704, 0.44970571628706785,
  0.449603223112195, 0.46983435861468875, 0.4632967102408138, 0.450215413828631,
]; // Replace with actual data
const predictedValues1 = [
  0.48286408, 0.5069987, 0.5243982, 0.5411298, 0.55813503, 0.5768508, 0.5985452,
  0.62134594, 0.64427674, 0.6665153, 0.68765676, 0.70707095, 0.72222644,
  0.73443806, 0.7424333, 0.7462406, 0.7469772, 0.7449534, 0.7410765, 0.73449737,
  0.72889227, 0.7291663, 0.7295392, 0.72839886, 0.72707367, 0.7252314,
  0.7226261, 0.72025746, 0.7199527, 0.7205416, 0.72038794, 0.7181028,
  0.71539724, 0.7139955, 0.713902, 0.7144445, 0.71297324, 0.7141643, 0.7143276,
  0.71102786, 0.70901525, 0.707278, 0.7014866, 0.69250524, 0.68380153,
  0.67798424, 0.67260617, 0.6686265, 0.66470504, 0.66067696, 0.6552775,
  0.65152365, 0.6491744, 0.6470174, 0.64698756, 0.6486484, 0.65123963,
  0.65467244, 0.6606276, 0.6677702, 0.67481273, 0.68186766, 0.69097173,
  0.6979443, 0.70405746, 0.7110566, 0.7148865, 0.71452737, 0.70182776,
  0.68638164, 0.6749907, 0.6635893, 0.6504677, 0.6389471, 0.63114977,
  0.62786007, 0.62810004, 0.6306344, 0.63591135, 0.6405341, 0.6427807,
  0.64633054, 0.65145075, 0.65715384, 0.66228116, 0.6670622, 0.67236483,
  0.67674106, 0.6776645, 0.68098396, 0.6940508, 0.7160378, 0.7341178, 0.7408408,
  0.73841494, 0.72467256, 0.7033628, 0.6838362, 0.6742792, 0.63473034,
  0.5653797, 0.4645787, 0.3460481, 0.252091, 0.18317991, 0.15285507, 0.19281659,
  0.29917037, 0.3916802, 0.43773988, 0.4894489, 0.50272644, 0.4621904,
  0.39555934, 0.30970877, 0.2140648, 0.14731306, 0.16468096, 0.26779905,
  0.4170739, 0.5045717, 0.5438558, 0.5535562, 0.5561628, 0.5670453, 0.57657534,
  0.56976014, 0.5610211, 0.5625015, 0.5620274, 0.5554028, 0.54522127,
  0.54488605, 0.5420462, 0.54273134, 0.5450036, 0.54042816, 0.5355958,
  0.5317443, 0.51882744,
]; // Replace with actual data
const allValues1 = actualValues1.concat(predictedValues1); // Combine all values

const predictedValues2 = [
  0.45886308, 0.46374726, 0.46435398, 0.46700704, 0.47021034, 0.47352105,
  0.47595024, 0.47799855, 0.48016766, 0.48254585, 0.48526666, 0.48822945,
  0.49116862, 0.49385738, 0.49629074, 0.49862447, 0.50102663, 0.5036335,
  0.5065002, 0.5095297, 0.51252264, 0.51534, 0.5179975, 0.52060866, 0.5232822,
  0.526051, 0.5288463, 0.5315318, 0.53397775, 0.53613, 0.538, 0.53960866,
  0.5409419, 0.5419353, 0.5425099, 0.54261994, 0.54227245, 0.541515, 0.54040194,
  0.5389829, 0.537314, 0.53547066, 0.533551, 0.531663, 0.5299132, 0.5283935,
  0.5271788, 0.5263295, 0.5259122, 0.52600795, 0.5267108, 0.52812684, 0.5303893,
  0.5336815, 0.53824633, 0.5443747, 0.5523762, 0.56247616, 0.5746602, 0.5884929,
  0.6028773, 0.61610126, 0.62637043, 0.6320983, 0.63239336, 0.6272758,
  0.6173236, 0.60314965, 0.5846496, 0.5615325, 0.53458786, 0.5057082,
  0.47882864, 0.45631588, 0.43980423, 0.42875624, 0.42076653, 0.41605395,
  0.4157831, 0.4181952, 0.41914076, 0.4141914, 0.4027247, 0.3855965, 0.3655429,
  0.34733173, 0.333205, 0.32369262, 0.3178466, 0.32084155, 0.33073547,
  0.35562062, 0.3965818, 0.4464753, 0.49320275, 0.5043284, 0.49903688,
  0.4915255, 0.48378453, 0.47167897, 0.4747358, 0.48924902, 0.4762085,
  0.35645533, 0.507802, 0.41116765, 0.29983187, 0.22541128, 0.20410809,
  0.22280046, 0.27612925, 0.3435751, 0.37660822, 0.40165073, 0.44278675,
  0.45721474, 0.45776442, 0.45654392, 0.4555062, 0.45522588, 0.45429432,
  0.45281962, 0.45101285, 0.44881523, 0.4464241, 0.4439517, 0.44147795,
  0.4389894, 0.43646586, 0.4338823, 0.4312356, 0.42859825, 0.42613435,
  0.4238752, 0.42192864, 0.4203866, 0.41938388, 0.419079, 0.41964424,
  0.42125905,
];

const allValues2 = actualValues1.concat(predictedValues2);

var options1 = {
  series: [
    {
      name: "Datapoints",
      data: allValues1,
    },
  ],
  chart: {
    height: 250,
    type: "line",
    toolbar: {
      show: false, // Hide the toolbar
    },
  },

  forecastDataPoints: {
    count: 140,
  },
  stroke: {
    width: 4,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  annotations: {
    xaxis: [
      {
        x: 140,
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0",
          },
        },
      },
    ],
  },
  xaxis: {
    min: 0, // Set minimum y-axis value
    max: 280, // Set maximum y-axis value
    tickAmount: 6,
    labels: {
      style: {
        colors: "white",
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },

  title: {
    text: "ConvLSTM",
    align: "left",
    style: {
      fontSize: "20px",
      color: "white",
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      type: "linear",
      gradientToColors: ["#d8046e", "#030ffd"],
      shadeIntensity: 5,
      stops: [50, 50],
      opacityFrom: 1,
      opacityTo: 1,
    },
  },
  toolbar: {
    show: false, // Hide the toolbar
  },
};

var chart1 = new ApexCharts(document.querySelector("#graph1"), options1);
chart1.render();

var options2 = {
  series: [
    {
      name: "Datapoints",
      data: allValues2,
    },
  ],
  chart: {
    height: 230,
    type: "line",
    toolbar: {
      show: false, // Hide the toolbar
    },
  },

  forecastDataPoints: {
    count: 140,
  },
  stroke: {
    width: 4,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  annotations: {
    xaxis: [
      {
        x: 140,
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0",
          },
        },
      },
    ],
  },
  xaxis: {
    min: 0, // Set minimum y-axis value
    max: 280, // Set maximum y-axis value
    tickAmount: 6,
    labels: {
      style: {
        colors: "white",
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },

  title: {
    text: "CNN + LSTM",
    align: "left",
    style: {
      fontSize: "20px",
      color: "white",
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      type: "linear",
      gradientToColors: ["#d8046e", "#030ffd"],
      shadeIntensity: 5,
      stops: [50, 50],
      opacityFrom: 1,
      opacityTo: 1,
    },
  },
  toolbar: {
    show: false, // Hide the toolbar
  },
};

var chart2 = new ApexCharts(document.querySelector("#graph2"), options2);
chart2.render();

var mse = {
  series: [
    {
      name: "MSE",
      data: [0.001203, 0.000213],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#030FFD"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["ConvLSTM", "CNN + LSTM"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: "MSE",
    align: "left",
    offsetY: 15,
    offsetX: 15,
    style: {
      fontSize: "20px",
      color: "white",
    },
  },
};

var mse = new ApexCharts(document.querySelector("#mse"), mse);
mse.render();

var mae = {
  series: [
    {
      name: "MAE",
      data: [0.026658, 0.006989],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#490BCE"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["ConvLSTM", "CNN + LSTM"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: "MAE",
    align: "left",
    offsetY: 15,
    offsetX: 15,
    style: {
      fontSize: "20px",
      color: "white",
    },
  },
};

var mae = new ApexCharts(document.querySelector("#mae"), mae);
mae.render();

var rmse = {
  series: [
    {
      name: "RMSE",
      data: [0.034685, 0.014613],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#7909AE"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["ConvLSTM", "CNN + LSTM"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: "RMSE",
    align: "left",
    offsetY: 15,
    offsetX: 15,
    style: {
      fontSize: "20px",
      color: "white",
    },
  },
};

var rmse = new ApexCharts(document.querySelector("#rmse"), rmse);
rmse.render();

var R2_score = {
  series: [
    {
      name: "R2_score",
      data: [0.743453, 0.954461],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#A7078F"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["ConvLSTM", "CNN + LSTM"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: "R2_score",
    align: "left",
    offsetY: 15,
    offsetX: 15,
    style: {
      fontSize: "20px",
      color: "white",
    },
  },
};

var R2_score = new ApexCharts(document.querySelector("#R2_score"), R2_score);
R2_score.render();

var MAPE = {
  series: [
    {
      name: "MAPE",
      data: [16.58365, 15.92538],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#D8046E"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["ConvLSTM", "CNN + LSTM"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: "MAPE",
    align: "left",
    offsetY: 15,
    offsetX: 15,
    style: {
      fontSize: "20px",
      color: "white",
    },
  },
};

var MAPE = new ApexCharts(document.querySelector("#MAPE"), MAPE);
MAPE.render();
