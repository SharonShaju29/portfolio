import "./css/personalInfo.css";
import Image from "react-bootstrap/Image";
import Profile from "../Assets/profilephoto.jpeg";
import SocialLink from "./socialLink";
import facebook from "../Assets/facebook.svg";
import git from "../Assets/git.svg";
import linkedIn from "../Assets/linkedIn.svg";
import instagram from "../Assets/instagram.svg";
import constants from "../constants/index";
import ContactDetails from "./contactDetails";

const { socialLinks } = constants;

function PersonalInfoBar() {
  return (
    <div className="personal-info-container">
      <Image src={Profile} className="profile-img" />
      <h2 className="profile-name">Sharon Shaju</h2>
      <h4 className="profile-role">Front End Developer</h4>
      <div className="social-links-wrapper">
        <SocialLink src={facebook} url={socialLinks.facebook} />
        <SocialLink src={git} url={socialLinks.git} />
        <SocialLink src={linkedIn} url={socialLinks.linkedIn} />
        <SocialLink src={instagram} url={socialLinks.instagram} />
      </div>
      <div>
        <ContactDetails/>
      </div>
    </div>
  );
}

export default PersonalInfoBar;
