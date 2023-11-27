import "./css/aboutMe.css";
import constants from "../constants/index";
import SkillCardAbout from "./skillCardAbout";
import code from "../Assets/code.svg";
import research from "../Assets/research.svg"


const { aboutMe,skillsDesc } = constants;
function AboutMe() {
  return (
    <div>
      <div className="title-card-wrapper">
        <h2 className="title">ABOUT ME</h2>
        <div className="horizontal-line" />
      </div>
      <div className="para-wrapper">
        <p>{aboutMe}</p>
      </div>
      <div className="heading-text">What I do!</div>
      <div>
         <SkillCardAbout image={code} name={skillsDesc[0].name} content={skillsDesc[0].content}/>
         <div ><SkillCardAbout image={research} name={skillsDesc[1].name} content={skillsDesc[1].content}/></div>
      </div>
    </div>
  );
}

export default AboutMe;
