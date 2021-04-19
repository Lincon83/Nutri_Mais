


import React,{useState} from "react"
import {Bar}from "react-chartjs-2"
import "./styles.css"


const BarChart=()=>{
 


return (
  <div className="BarExample">
      <Bar
          data={{
            labels: ['label 1', 'label 2', 'label 3', 'label 4'],
            datasets: [
                {
                    label: 'test label',
                    data: [
                        48,
                        35,
                        73,
                        82
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 3
                }
            ]
        }}
          options={{
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                },
                title: {
                    display: true,
                    text: 'Data Orgranized In Bars',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        } }
         />
  </div>)
}

export default BarChart     