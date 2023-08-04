import "./css/skillCardAbout.css";
import Image from "react-bootstrap/Image";


function skillCardAbout(props) {
  return (
    <div className="card-container">
      <div>
        <Image src={props.image} className="icon-dsg"></Image>
        <h3 className="text-aligner">{props.name}</h3>
      </div>
      <p className="skill-desc">{props.content}</p>
    </div>
  );
}

export default skillCardAbout;
