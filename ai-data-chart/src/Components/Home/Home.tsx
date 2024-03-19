import "./home.css"
import InsightSummery from '../Charts/InsightSummery';
import CategoryDistribution from '../Charts/CategoryDistribution';

type Props = {}



export default function Home({}: Props) {


  return (
    <div className='home_container'>
        <div className="container_top">
        <InsightSummery />
        <CategoryDistribution/>
        </div>
        
       
    </div>
  )
}