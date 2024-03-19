import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import "./insghtSummery.css";
import { useSelector } from 'react-redux';

type Props = {}

export default function Useage_Platform({}: Props) {

    const {usage_statistics} = useSelector((state:any) => state.user.user.ai_data);
    


    const chartRef = useRef(null);

    useEffect(() => { 
      if (chartRef && chartRef.current) {
        const refrence = chartRef.current
  
        new Chart(refrence, {
          type: 'pie',
          data: {
            labels: Object.keys(usage_statistics.by_platform).map(obj => `${obj}`),
            datasets: [{
              label: 'usage statistic (by_platform)',
              data:Object.keys(usage_statistics.by_platform).map((key) => ( usage_statistics.by_platform[key] )),
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }, []);
   
  return (
    <div  className="container">
      <canvas  ref={chartRef} ></canvas>
    </div>
  )
}
