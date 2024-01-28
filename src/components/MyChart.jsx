import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const MyChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "No. of students",
        data: [100, 80, 90, 60, 49, 40, 25, 20, 9],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Kartik's Result",
        align: "left",
      },
      subtitle: {
        text: "Test name",
        align: "left",
      },
      xaxis: {
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        title: { text: "Marks" },
      },
      yaxis: {
        title: { text: "Number of students" },
      },
      legend: {
        horizontalAlign: "left",
      },
      annotations: {
        points: [
          {
            x: 70,
            y: 25,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
            },
            label: {
              borderColor: "#ff0000",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#ff0000",
              },
              text: "Kartik Kapoor",
            },
          },
        ],
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};
