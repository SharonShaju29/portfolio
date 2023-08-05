import "./css/skills.css";
import Image from "react-bootstrap/Image";
import TechnicalSkills from "../Assets/technicalSkill.png";
import ListItem from "./listItem";
import constants from "../constants/index";

const { technicalSkills } = constants;

function Skills() {
  return (
    <div>
      <div className="title-wrapper">
        <Image src={TechnicalSkills} className="image-dsg" />
        <h2>Technical Skills</h2>
        <div className="horizontal-liner" />
      </div>
      <div className="list-item-wrapper">
        <ListItem skill={technicalSkills[0]}/>
        <ListItem skill={technicalSkills[1]}/>
        <ListItem skill={technicalSkills[2]}/>
        <ListItem skill={technicalSkills[3]}/>
        <ListItem skill={technicalSkills[4]}/>
        <ListItem skill={technicalSkills[5]}/>
        <ListItem skill={technicalSkills[6]}/>
        <ListItem skill={technicalSkills[7]}/>
        <ListItem skill={technicalSkills[8]}/>
        <ListItem skill={technicalSkills[9]}/>
        <ListItem skill={technicalSkills[10]}/>
        <ListItem skill={technicalSkills[11]}/>
      </div>
    </div>
  );
}

export default Skills;
