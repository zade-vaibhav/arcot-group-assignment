import "./home.css"
import InsightSummery from '../Charts/InsightSummery';
import CategoryDistribution from '../Charts/CategoryDistribution';
import ResponceTime from "../Charts/ResponceTime";
import ResponceTime_Week from "../Charts/ResponceTime_Week";
import Reting from "../Charts/Reting";
import Useage_Platform from "../Charts/Useage_Platform";
import Usage_country from "../Charts/Usage_country";

type Props = {}



export default function Home({}: Props) {


  return (
    <div className='home_container'>
        <div className="container_first">
        <InsightSummery />
        <CategoryDistribution/>
        </div>
        <div className="container_second">
        <ResponceTime/>
        <ResponceTime_Week/>
        </div>
        <div className="container_third">
        <Reting/>
        </div>
        <div className="container_fourth">
        <Useage_Platform/>
        <Usage_country/>
        </div>
    </div>
  )
}