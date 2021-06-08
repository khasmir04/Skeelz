var cPersonal = document.getElementById("chart-personal-skills");
var cSkills = document.getElementById("chart-skills-skills");
var cDevStacks = document.getElementById("chart-devstacks-skills");

Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.animation.easing = "easeOutExpo";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.startAngle = 36;
Chart.defaults.global.tooltips.backgroundColor = "rgba(204, 204, 204, 0.9)";
Chart.defaults.global.tooltips.titleFontColor = "rgba(59, 59, 59, 1)";
Chart.defaults.global.tooltips.titleFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.titleSpacing = 1;
Chart.defaults.global.tooltips.titleMarginBottom = 10;
Chart.defaults.global.tooltips.bodyFontColor = "rgba(59, 59, 59, 1)";
Chart.defaults.global.tooltips.bodyFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.bodySpacing = 1;
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.cornerRadius = 3;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.tooltips.mode = "point";
Chart.defaults.global.tooltips.position = "nearest";
Chart.defaults.radar.scale.gridLines = false;

var myChartPersonal = new Chart(cPersonal, {
  type: "radar",
  data: {
    labels: [
      ["Initiative"],
      ["Creative", "Thinking"],
      ["Time", "Management"],
      ["Problem", "Solving"],
      ["Detail", "Oriented"]
    ],
    datasets: [
      {
        label: "Developer",
        lineTension: 0.1,
        backgroundColor: "rgba(255, 204, 102, 0.2)",
        borderColor: "rgba(255, 204, 102, 1)",
        pointBackgroundColor: "rgba(255, 204, 102, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 204, 102, 1)",
        data: [3, 2, 3, 4, 4]
      }
    ]
  },
  options: {
    startAngle: 36,
    scale: {
      angleLines: {
        display: true,
        lineWidth: 0.5,
        color: "rgba(128, 128, 128, 0.2)"
      },
      pointLabels: {
        fontSize: 14,
        fontStyle: "300",
        fontColor: "rgba(204, 204, 204, 1)",
        fontFamily: "'Lato', sans-serif"
      },
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 3,
        min: 0,
        max: 3,
        display: false
      }
    }
  }
});

var myChartSkills = new Chart(cSkills, {
  type: "radar",
  data: {
    labels: [
      ["Teamwork"],
      ["Commu-", "nication"],
      ["Remote", "Work Flow"],
      ["Punctuality"],
      ["Effectiveness"]
    ],
    datasets: [
      {
        label: "Developer",
        lineTension: 0.1,
        backgroundColor: "rgba(102, 153, 204, 0.2)",
        borderColor: "rgba(102, 153, 204, 1)",
        pointBackgroundColor: "rgba(102, 153, 204, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(102, 153, 204, 1)",
        data: [4, 3, 3, 3, 4]
      }
    ]
  },
  options: {
    scale: {
      angleLines: {
        display: true,
        lineWidth: 0.5,
        color: "rgba(128, 128, 128, 0.2)"
      },
      pointLabels: {
        fontSize: 14,
        fontStyle: "300",
        fontColor: "rgba(204, 204, 204, 1)",
        fontFamily: "'Lato', sans-serif"
      },
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 3,
        min: 0,
        max: 3,
        display: false
      }
    }
  }
});

var myChartDevStacks = new Chart(cDevStacks, {
  type: "radar",
  data: {
    labels: [["Tools"], ["Backend"], ["Database"], ["Frontend"], ["Design"]],
    datasets: [
      {
        label: "Developer",
        lineTension: 0.1,
        backgroundColor: "rgba(242, 119, 122, 0.2)",
        borderColor: "rgba(242, 119, 122, 1)",
        pointBackgroundColor: "rgba(242, 119, 122, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(242, 119, 122, 1)",
        data: [2, 2, 3, 4, 4]
      }
    ]
  },
  options: {
    scale: {
      angleLines: {
        display: true,
        lineWidth: 0.5,
        color: "rgba(128, 128, 128, 0.2)"
      },
      pointLabels: {
        fontSize: 14,
        fontStyle: "300",
        fontColor: "rgba(204, 204, 204, 1)",
        fontFamily: "'Lato', sans-serif"
      },
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 3,
        min: 0,
        max: 3,
        display: false
      }
    }
  }
});

// Insert Date in Copyright Footer Section
var dt = new Date(),
  year = dt.getFullYear(),
  copyDateEl = document.getElementById("js-year"),
  currentYear = document.createTextNode(year);
copyDateEl.appendChild(currentYear);
