import {useRef,useEffect} from 'react'
import Chart from 'chart.js/auto';
import "./InsightSummery"
import { useSelector } from 'react-redux';

type Props = {
   
  };

export default function CategoryDistribution({}: Props) {

    const {category_distribution} = useSelector((state:any) => state.user.user.ai_data);

    const chartRef = useRef(null);

    useEffect(() => {
        
      if (chartRef && chartRef.current) {
        const refrence = chartRef.current
  
        new Chart(refrence, {
          type: 'bar',
          data: {
            labels:Object.keys(category_distribution).map((key) => (`${key}` )) ,
            datasets: [{
              label: 'category_distribution',
              data:Object.keys(category_distribution).map((key) => ( category_distribution[key] )) ,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
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
