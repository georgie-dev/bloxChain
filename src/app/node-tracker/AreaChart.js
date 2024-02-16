'use client'
import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {

    const options = {
        chart: {
          type: 'area',
          width: 600,
          height: 300,
          events: {
            load: function () {
                var chart = this,
                    image = chart.renderer.image('/logo-etherscan.svg', 250, 100, 110, 25).add();
            }
        }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
              week: '%b %e'
            },
            tickInterval: 7 * 24 * 3600 * 1000 , // 7 days in milliseconds * 7 for a week
            min: Date.now() - (30 * 24 * 3600 * 1000),
            max: Date.now() // Current day
          },
        yAxis: {
            title: {
                text: "Total Nodes",
                style: {
                    color: '#000',
                    fontWeight:'500',
                    fontSize: '13px'
                }
            },
            tickInterval: 2500
        },
        plotOptions: {
          series: {
              fillColor: {
                  linearGradient: [0, 0, 0, 250],
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              }
          }
      },
        credits:{
            enabled: false
        },
        title:{
          text: undefined
        },
        legend: {
          enabled: false
      },
        series: [{
            name: 'Total Nodes',
            data: [
                { x: Date.now() - (30 * 24 * 3600 * 1000), y: 7423 },
                { x: Date.now() - (29 * 24 * 3600 * 1000), y: 7542 },
                { x: Date.now() - (28 * 24 * 3600 * 1000), y: 7526 },
                { x: Date.now() - (27 * 24 * 3600 * 1000), y: 7234 },
                { x: Date.now() - (26 * 24 * 3600 * 1000), y: 7453 },
                { x: Date.now() - (25 * 24 * 3600 * 1000), y: 7120 },
                { x: Date.now() - (24 * 24 * 3600 * 1000), y: 7245 },
                { x: Date.now() - (23 * 24 * 3600 * 1000), y: 7954 },
                { x: Date.now() - (22 * 24 * 3600 * 1000), y: 7890 },
                { x: Date.now() - (21 * 24 * 3600 * 1000), y: 7345 },
                { x: Date.now() - (20 * 24 * 3600 * 1000), y: 7569 },
                { x: Date.now() - (19 * 24 * 3600 * 1000), y: 7594 },
                { x: Date.now() - (18 * 24 * 3600 * 1000), y: 7123 },
                { x: Date.now() - (17 * 24 * 3600 * 1000), y: 7943 },
                { x: Date.now() - (16 * 24 * 3600 * 1000), y: 7123 },
                { x: Date.now() - (15 * 24 * 3600 * 1000), y: 7950 },
                { x: Date.now() - (14 * 24 * 3600 * 1000), y: 7230 },
                { x: Date.now() - (13 * 24 * 3600 * 1000), y: 7123 },
                { x: Date.now() - (12 * 24 * 3600 * 1000), y: 7503 },
                { x: Date.now() - (11 * 24 * 3600 * 1000), y: 7321 },
                { x: Date.now() - (10 * 24 * 3600 * 1000), y: 7345 },
                { x: Date.now() - (9 * 24 * 3600 * 1000), y: 7245 },
                { x: Date.now() - (8 * 24 * 3600 * 1000), y: 7565 },
                { x: Date.now() - (7 * 24 * 3600 * 1000), y: 7093 },
                { x: Date.now() - (6 * 24 * 3600 * 1000), y: 7123 },
                { x: Date.now() - (5 * 24 * 3600 * 1000), y: 7543 },
                { x: Date.now() - (4 * 24 * 3600 * 1000), y: 7789 },
                { x: Date.now() - (3 * 24 * 3600 * 1000), y: 7780 },
                { x: Date.now() - (2 * 24 * 3600 * 1000), y: 7790 },
                { x: Date.now() - (1 * 24 * 3600 * 1000), y: 7543 },
                { x: Date.now(), y: 7658 }
              ],
              type: 'area'
          }],
      };
  return (
    <HighchartsReact highcharts={Highcharts} options={options}/>
  )
}

export default AreaChart