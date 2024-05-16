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
  0.45380324, 0.45610034, 0.4550896, 0.45552298, 0.45680672, 0.45766324,
  0.45850933, 0.46050903, 0.46409115, 0.46676788, 0.46732724, 0.46605656,
  0.46401104, 0.46185863, 0.46017233, 0.45788226, 0.45529306, 0.451283,
  0.44580448, 0.44183722, 0.4375104, 0.4328204, 0.42729655, 0.4222883,
  0.42043805, 0.41544807, 0.4095467, 0.4092905, 0.40925306, 0.40755713,
  0.40679628, 0.4101664, 0.41324788, 0.41145852, 0.4125729, 0.41741905,
  0.4192626, 0.42094165, 0.42663518, 0.43233228, 0.43457404, 0.43308067,
  0.43520108, 0.44009244, 0.44079074, 0.4411842, 0.44640335, 0.45045, 0.4514955,
  0.4541077, 0.45833358, 0.46334153, 0.4661525, 0.4682693, 0.47328293,
  0.47970024, 0.48291758, 0.48359227, 0.48627657, 0.4900763, 0.49230433,
  0.49356785, 0.49840373, 0.5038958, 0.5105204, 0.5175495, 0.5215487, 0.5229022,
  0.52187574, 0.52217156, 0.5244834, 0.5246612, 0.5232181, 0.5228892,
  0.52144474, 0.51854575, 0.5172289, 0.5178225, 0.51949596, 0.52042913,
  0.5201474, 0.5213266, 0.52197313, 0.5227107, 0.5252673, 0.5305179, 0.5376785,
  0.54544115, 0.55316293, 0.5631311, 0.5784244, 0.5973258, 0.6139264,
  0.63130033, 0.6548558, 0.6692138, 0.66076076, 0.6402937, 0.61600435,
  0.57588977, 0.51763225, 0.44764134, 0.36866766, 0.32811016, 0.306975,
  0.29836795, 0.31090704, 0.35000163, 0.38003963, 0.40066722, 0.425402,
  0.4407636, 0.44605038, 0.4482987, 0.45207283, 0.45996177, 0.46849588,
  0.4769136, 0.4885429, 0.5032368, 0.514103, 0.52302474, 0.5324252, 0.54230684,
  0.5533237, 0.56131816, 0.56371874, 0.5655051, 0.5678097, 0.57190126,
  0.5784988, 0.58118856, 0.5818511, 0.57999253, 0.575861, 0.5739035, 0.5717629,
  0.56776077, 0.5637157, 0.55960566,
]; // Replace with actual data
const allValues1 = actualValues1.concat(predictedValues1); // Combine all values

const predictedValues2 = [
  0.45853192, 0.46588302, 0.4687683, 0.47248292, 0.47660255, 0.48146546,
  0.48579907, 0.49018857, 0.49469823, 0.49932766, 0.5039144, 0.5083773,
  0.51273537, 0.5170303, 0.5212789, 0.5254333, 0.5294059, 0.53311336, 0.5365107,
  0.53957754, 0.5422964, 0.5446307, 0.5465517, 0.54805255, 0.5491587, 0.5499215,
  0.5504015, 0.55066746, 0.55079746, 0.55089587, 0.55104154, 0.5513062,
  0.551769, 0.5524955, 0.5535184, 0.55485237, 0.55652183, 0.55855, 0.5609462,
  0.563744, 0.5670135, 0.57082725, 0.57531047, 0.58066636, 0.5869635,
  0.59429765, 0.6024401, 0.6111171, 0.61969244, 0.62726724, 0.6326759,
  0.6348831, 0.6334398, 0.6284946, 0.6206465, 0.6105434, 0.59856844, 0.5847992,
  0.5700151, 0.5552868, 0.5423437, 0.5329831, 0.52795476, 0.52667415, 0.5278715,
  0.5303624, 0.53327304, 0.5358582, 0.53748715, 0.5380354, 0.538024, 0.5379548,
  0.53835124, 0.5402123, 0.5450299, 0.55431044, 0.5684004, 0.5857582, 0.5996326,
  0.6041283, 0.60050756, 0.592418, 0.58354014, 0.57962024, 0.5824025, 0.5849554,
  0.57569927, 0.5504808, 0.5123551, 0.47661465, 0.44605032, 0.43248308,
  0.42960578, 0.42378837, 0.41424358, 0.40885743, 0.40829432, 0.41114652,
  0.41312748, 0.42619425, 0.45445403, 0.48125035, 0.4925294, 0.48518205,
  0.46930113, 0.47925526, 0.5425633, 0.5961828, 0.55197835, 0.50082886,
  0.42567945, 0.3694393, 0.3549933, 0.38554657, 0.41843057, 0.46535134,
  0.40793642, 0.4192924, 0.2722904, 0.21858177, 0.20184647, 0.22787984,
  0.27642286, 0.34638444, 0.38408306, 0.40732342, 0.4513547, 0.47332346,
  0.47976804, 0.48276967, 0.48400587, 0.4875393, 0.48908186, 0.4904688,
  0.49153334, 0.4929921, 0.49442235, 0.49579537, 0.49692592, 0.4978964,
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
      data: [0.000266, 0.0002217],
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
      data: [0.008204, 0.007707],
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
      data: [0.01633, 0.014891],
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
      data: [0.94307, 0.952714],
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
      data: [15.904, 16.015],
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
