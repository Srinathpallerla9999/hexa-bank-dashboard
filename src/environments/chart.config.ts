export const chartConfig = {
    toolbar: {
      show: false,
    },
    series: [
      {
        name: "Income",
        data: [22, 44, 35, 47, 26, 11, 38, 11, 20, 46, 40, 30],
        color: "#b6c1c1",
      },
      {
        name: "Investment",
        data: [45, 36, 48, 10, 28, 17, 35, 21, 24, 44, 17, 20],
        color: "#adabc5",
      },
      {
        name: "Expense",
        data: [20, 35, 41, 36, 26, 45, 48, 32, 43, 41, 24, 45],
        color: "#9192af",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dev",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        display: false,
      },
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      title: {
        display: false,
      },
      labels: {
        formatter: function (val: any) {
          return `$ ${val} K`;
        },
        style: {
          colors: ["#d4d1d6"],
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + "K";
        },
      },
    },
  };
  