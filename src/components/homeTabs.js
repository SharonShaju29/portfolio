import './css/homeTabs.css'
import HomeTabItem from '../components/homeTabItem'
import constants from '../constants/index'
import Home from '../Assets/home.svg'
import Work from '../Assets/work.svg'
import Skills from '../Assets/skills.svg'
import { Link } from "react-router-dom";

const {tabs} = constants;

function HomeTabs() {
    return <div className="tabs-wrapper">
         <Link to="/"><HomeTabItem image={Home} name={tabs[0].name}/></Link>
         <Link to="/work"><HomeTabItem image={Work} name={tabs[1].name}/></Link>
         <Link to="/skills"><HomeTabItem image={Skills} name={tabs[2].name}/></Link>
    </div>
}

export default HomeTabs