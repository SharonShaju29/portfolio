import './css/mainContent.css'
import ContentRouter from './contentRouter'
import AboutMe from "./aboutMe";
import WorkExperience from "./workExperience";
import Skills from "./skillsInfo.js";

function MainContent() {
    return <div className="main-content-wrapper">
        <div className="desktop-class">
     <ContentRouter/>
     </div>
    </div>
}

export default MainContent;