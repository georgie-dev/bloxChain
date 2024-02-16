'use client'
import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({data}:any) => {

  // console.log(data)
    const options = {
        chart: {
          type: 'spline',
          width: 700,
          height: 300,
          padding: 0,
          margin: 0
        },
        xAxis: {
            visible: false,
          },
        yAxis: {
            visible: false
        },
        credits:{
            enabled: false
        },
        title:{
          text: undefined
        },
        tooltip: {
          valueDecimals: 2,
          valuePrefix: '$',
          backgroundColor: '#000',
          borderRadius: 3,
          padding: 4,

          style:{
            color:"#fff",
            cursor:'default',
            fontSize:'0.8em'
            }
      },
        legend: {
          enabled: false
      },
      series: [{
        name: 'Price',
        data: data,
        lineWidth: 3,
        marker: {
            enabled: false
        },
        color: 'orange',
        lineColor: 'orange',
        fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 1, y2: 1 },
            stops: [
                [0, 'orange'],
                [1, 'white']
            ]
        }
    },],
      };
  return (
    <HighchartsReact highcharts={Highcharts} options={options}/>
  )
}

export default Chart