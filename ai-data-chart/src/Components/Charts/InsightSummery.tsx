import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import "./insghtSummery.css";
import { useSelector } from 'react-redux';


type Props = {
  
};

export default function InsightSummery({  }: Props) {

    const {insight_summary} = useSelector((state:any) => state.user.user.ai_data);
    


    const chartRef = useRef(null);

    useEffect(() => { 
      if (chartRef && chartRef.current) {
        const refrence = chartRef.current.getContext('2d');
  
        new Chart(refrence, {
          type: 'doughnut',
          data: {
            labels: ["total_queries","successful_queries","failed_queries","average_response_time"],
            datasets: [{
              label: '# of Votes',
              data: [insight_summary.total_queries,insight_summary.successful_queries,insight_summary.failed_queries,insight_summary.average_response_time],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
    <div  className="container">
         <canvas  ref={chartRef} ></canvas>
    </div>
  );
}
