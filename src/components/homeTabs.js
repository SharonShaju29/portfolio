import './css/homeTabs.css'
import HomeTabItem from '../components/homeTabItem'
import constants from '../constants/index'
import Home from '../Assets/home.svg'
import Work from '../Assets/work.svg'
import Skills from '../Assets/skills.svg'
import {Link} from 'react-router-dom'

const {tabs} = constants;

function HomeTabs() {
    return <div className="tabs-wrapper">
         <a href="/"><HomeTabItem image={Home} name={tabs[0].name}/></a>
         <a href="/work"><HomeTabItem image={Work} name={tabs[1].name}/></a>
         <a href="/skills"><HomeTabItem image={Skills} name={tabs[2].name}/></a>
    </div>
}

export default HomeTabs