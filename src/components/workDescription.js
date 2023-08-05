import "./css/workDescription.css";
import constants from "../constants";

const { internDescription } = constants;

function WorkDescription() {
  return (
    <div className="description-wrapper">
      <div className="info-wrapper">
        <h4 className="title-dsg">
          Software Developer Intern at Quinbay Technologies - Coimbatore
        </h4>
        <h5 className="year">August 2022 - August 2023</h5>
      </div>
      <p className="work-description">{internDescription}</p>
    </div>
  );
}

export default WorkDescription;
