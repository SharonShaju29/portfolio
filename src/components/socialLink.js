import "./css/socialLinks.css";
import Image from "react-bootstrap/Image";

function SocialLink(props) {
  return (
    <div className="content-wrapper">
      <a href={props.url} target="_blank">
        <Image src={props.src} className="social-link"></Image>
      </a>
    </div>
  );
}

export default SocialLink;
