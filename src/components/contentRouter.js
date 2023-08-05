import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./aboutMe";
import WorkExperience from "./workExperience";
import Skills from "./skillsInfo.js";

function ContentRouter() {
  return (
    <div>
      <Routes basename="/portfolio">
        <Route exact path="/portfolio" element={<AboutMe/>} />
        <Route path="/work"  element={<WorkExperience/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default ContentRouter;
