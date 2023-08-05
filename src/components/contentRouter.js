import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./aboutMe";
import WorkExperience from "./workExperience";
import Skills from "./skillsInfo.js";

function ContentRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AboutMe/>} />
        <Route path="/work"  element={<WorkExperience/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default ContentRouter;
