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
];
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
];
const predictedValues1 = [
  0.44523025, 0.44124755, 0.43782812, 0.43870223, 0.44148362, 0.44556803,
  0.44937497, 0.45245486, 0.45626333, 0.45911342, 0.4610144, 0.46354234,
  0.46534923, 0.46486807, 0.4646649, 0.466556, 0.4677716, 0.4673099, 0.46692148,
  0.46638784, 0.46576765, 0.46530962, 0.46284324, 0.46062562, 0.4602487,
  0.4574155, 0.45513713, 0.4554915, 0.45591122, 0.45444155, 0.45171148,
  0.45402506, 0.45630154, 0.45220923, 0.44903976, 0.45165274, 0.45360088,
  0.4532967, 0.454927, 0.45936778, 0.463189, 0.46434572, 0.46554545, 0.46807578,
  0.4715517, 0.47332484, 0.4727236, 0.4735757, 0.47480747, 0.47445104,
  0.47179502, 0.47014183, 0.46984932, 0.46730226, 0.46484864, 0.46602437,
  0.4675887, 0.46705097, 0.4664442, 0.4695705, 0.47366858, 0.47710562,
  0.4824699, 0.48610964, 0.4914871, 0.50057364, 0.5073517, 0.5112822,
  0.51382726, 0.5167808, 0.5204713, 0.52174366, 0.5217212, 0.52079636,
  0.51870215, 0.51674026, 0.5166844, 0.51609874, 0.51666176, 0.51962763,
  0.523748, 0.5307778, 0.53766763, 0.54322535, 0.55028236, 0.5584125, 0.5714156,
  0.58773994, 0.60463375, 0.62574524, 0.6527961, 0.6772293, 0.69517154,
  0.7147209, 0.7357618, 0.7434268, 0.73130924, 0.70633775, 0.66937304,
  0.6052273, 0.50977933, 0.41311693, 0.3364842, 0.29981607, 0.3052727,
  0.3170721, 0.33758786, 0.3778948, 0.40308365, 0.42028686, 0.43810284,
  0.44772705, 0.4582837, 0.46745571, 0.47244385, 0.47333795, 0.4702431,
  0.47078314, 0.47720677, 0.48652932, 0.4935656, 0.5004401, 0.5082897,
  0.5154068, 0.52357614, 0.5318054, 0.53642005, 0.5409414, 0.5454774,
  0.54721826, 0.5483921, 0.5468092, 0.544558, 0.5376057, 0.52709675, 0.5206863,
  0.51731455, 0.5145844, 0.5128348, 0.5120003,
];
const allValues1 = actualValues1.concat(predictedValues1);

const predictedValues2 = [
  0.45271942, 0.45890513, 0.45860675, 0.45945966, 0.45942533, 0.4596525,
  0.4597412, 0.45977414, 0.45999813, 0.46030232, 0.4606738, 0.46091023,
  0.46106178, 0.4611773, 0.46134186, 0.46160775, 0.46197966, 0.4624697,
  0.4630441, 0.46372363, 0.46450314, 0.4654287, 0.46650708, 0.46772367,
  0.46908414, 0.47056085, 0.4721381, 0.4738034, 0.47555953, 0.47733688,
  0.47913107, 0.4809322, 0.48268732, 0.4843577, 0.48594904, 0.4874782,
  0.48889995, 0.49021298, 0.49146235, 0.49265316, 0.49380648, 0.49495518,
  0.49615443, 0.49740395, 0.49878302, 0.50030524, 0.5020197, 0.5039584,
  0.50615233, 0.5086329, 0.51142883, 0.514565, 0.5180559, 0.521918, 0.5261457,
  0.53070706, 0.5356135, 0.5406496, 0.5459192, 0.55117875, 0.55630934,
  0.5611323, 0.56549513, 0.56934464, 0.57225597, 0.5740898, 0.5749954,
  0.57464147, 0.57317615, 0.5706028, 0.5672955, 0.5631455, 0.558486, 0.55360204,
  0.54874194, 0.54411507, 0.5398559, 0.53601754, 0.5325192, 0.5292643, 0.526052,
  0.52270794, 0.51899546, 0.5146995, 0.50948405, 0.50358826, 0.49651363,
  0.4889639, 0.47973892, 0.47061068, 0.4592017, 0.44854572, 0.43763483,
  0.42444044, 0.40897667, 0.38958722, 0.3650194, 0.34073544, 0.3243954,
  0.29535714, 0.27290028, 0.24973363, 0.23612781, 0.2803405, 0.3282312,
  0.38508916, 0.50210965, 0.5499504, 0.51548016, 0.46715015, 0.42257687,
  0.39546585, 0.3687828, 0.34813377, 0.33807474, 0.3430613, 0.36213365,
  0.3923514, 0.423541, 0.44383812, 0.45531827, 0.46578255, 0.48071355,
  0.49549377, 0.5042905, 0.5081537, 0.51001126, 0.5107461, 0.5107306, 0.5106787,
  0.5107039, 0.5103884, 0.5095078, 0.5081538, 0.5065286, 0.50479764, 0.50301266,
  0.5011277, 0.49907345, 0.49682003,
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
      data: [0.000248, 0.000209],
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
      data: [0.0078049, 0.006808],
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
      data: [0.015776, 0.014469],
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
      data: [0.946922, 0.955357],
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
      data: [15.918789, 15.696206],
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
