import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({data, highlight, domain}) => {
    // calculate frequency of data
    var counts = {};
    for (var i = 0; i < data.length; i++)
      counts[data[i]] = counts[data[i]] + 1 || 1;

    // generate data
    const barDataValues = [];
    for (let i = 0; i < domain[1]; i++) {
      barDataValues.push(counts[i] || 0);
    }
    const barData = {
      labels: barDataValues.map((val, i) => i),
      datasets: [
        {
          backgroundColor: barDataValues.map((val, i) =>
            i >= highlight[0] && i <= highlight[1]
              ? '#B0B0B0'
              : '#DDDDDD'
          ),
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          data: barDataValues
        }
      ]
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              min: 0
            }
          }
        ]
      }
    };
  
    return <Bar data={barData} options={options} />;
}

export default BarChart;
