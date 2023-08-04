import "./css/contactDetailsRow.css";
import Image from "react-bootstrap/Image";

function ContactDetialsRow(props) {
  return (
    <div className="detail-row">
      <Image src={props.img} className="icon" />
      <div className="detail-info-row">
        <div className="detail-row-type">{props.type}</div>
        <div className="detail-row-info">{props.info}</div>
      </div>
    </div>
  );
}

export default ContactDetialsRow;
