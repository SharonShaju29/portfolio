import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./aboutMe";
import WorkExperience from "./workExperience";
import Skills from "./skillsInfo.js";

function ContentRouter() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<AboutMe/>} />
        <Route path="/portfolio/work"  element={<WorkExperience/>}/>
        <Route path="/portfolio/skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default ContentRouter;
