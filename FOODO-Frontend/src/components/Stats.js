import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
Chart.register(ArcElement);

const rowC = {
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "40%"
}

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Stats extends React.Component {
  render() {
    return (
      <div style={rowC}>
        <br /><br /><br />
        <div>
        <Pie
          data={state}
          options={{
            labels:{

            },
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        </div>
      </div>
    );
  }
}

/*
        <Doughnut
          data={state}
          width={"30%"}
          options={{
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        */