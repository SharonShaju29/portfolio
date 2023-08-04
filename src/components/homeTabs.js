import './css/homeTabs.css'
import HomeTabItem from '../components/homeTabItem'
import constants from '../constants/index'
import Home from '../Assets/home.svg'
import Work from '../Assets/work.svg'
import Skills from '../Assets/skills.svg'

const {tabs} = constants;

function HomeTabs() {
    return <div className="tabs-wrapper">
         <HomeTabItem image={Home} name={tabs[0].name}/>
         <HomeTabItem image={Work} name={tabs[1].name}/>
         <HomeTabItem image={Skills} name={tabs[2].name}/>
    </div>
}

export default HomeTabs