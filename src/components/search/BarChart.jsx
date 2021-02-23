import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, highlight }) => {
  const counts = new Array(50).fill(0);
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > 250000) {
        counts[49] = counts[49] + 1;
      } else {
        counts[Math.floor(data[i] / 5000)] = counts[Math.floor(data[i] / 5000)] + 1;
      }
    }
}

  const barData = {
    labels: counts,
    datasets: [
      {
        backgroundColor: counts.map((val, i) =>
          val >= highlight[0] && val <= highlight[1]
            ? '#B0B0B0'
            : '#DDDDDD'
        ),
        data: counts,
      }
    ]
  };

  const options = {
    events: [],
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false,
            categoryPercentage: 1,
          }
        ],
        yAxes: [
          {
            display: false,
          }
        ]
      }
    };
  
  return <Bar data={barData} options={options} />;
}

export default React.memo(BarChart);
