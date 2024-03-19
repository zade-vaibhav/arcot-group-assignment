import {useRef,useEffect} from 'react'
import Chart from 'chart.js/auto';
import "./responceTime.css"
import { useSelector } from 'react-redux';

type Props = {}

export default function ResponceTime_Week({}: Props) {

    const {response_times} = useSelector((state:any) => state.user.user.ai_data);
    console.log(response_times)
    const chartRef = useRef(null);

    useEffect(() => {
        
      if (chartRef && chartRef.current) {
        const refrence = chartRef.current
  
        new Chart(refrence, {
          type: 'line',
          data: {
            labels:response_times.week_wise.map((item:any) => item.week) ,
            datasets: [{
              label: 'response_times (week_wise)',
              data:response_times.week_wise.map((item:any )=> item.average_time) ,
              backgroundColor: [
                'rgba(255, 99, 132, )',
                'rgba(54, 162, 235,)',
                'rgba(255, 206, 86, )',
                'rgba(75, 192, 192,)',
                'rgba(153, 102, 255,)',
                'rgba(255, 159, 64,)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
     <div className='container'>
         <canvas  ref={chartRef} ></canvas>
    </div>
  )
}
