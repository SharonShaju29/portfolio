import './css/mainContentMobile.css'
import AboutMe from "./aboutMe";
import WorkExperience from "./workExperience";
import Skills from "./skillsInfo.js";

function MainContentMobile() {
    return <div className="main-mobile-container">
        <div className="main-mobile-wrapper position-about-me">
           <AboutMe/>
        </div>
        <div className="main-mobile-wrapper position-work-exp">
           <WorkExperience/>
        </div>
        <div className="main-mobile-wrapper position-work-skills">
           <Skills/>
        </div>
    </div>
}

export default MainContentMobile;