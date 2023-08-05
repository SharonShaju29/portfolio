import "./css/contactDetails.css";
import ContactDetialsRow from "./contactDetailsRow";
import phone from "../Assets/phone.png";
import mail from '../Assets/mail.svg';
import location from '../Assets/location.png';
import constants from "../constants/index";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import downloadArrow from '../Assets/downloadArrow.png'


const { contactDetails } = constants;

function ContactDetails() {
  return (
    <div className="details-wrapper">
      <ContactDetialsRow
        img={phone}
        type={contactDetails.phone.type}
        info={contactDetails.phone.info}
      />
       <ContactDetialsRow
        img={mail}
        type={contactDetails.email.type}
        info={contactDetails.email.info}
      />
       <ContactDetialsRow
        img={location}
        type={contactDetails.location.type}
        info={contactDetails.location.info}
      />
      <a href="https://drive.usercontent.google.com/download?id=121gQlt4J1iWK1psg3ecFCTpm1zUnp-Zs&export=download&authuser=1&confirm=t&uuid=d9def659-a5fa-4690-8448-1d99b73d8a4c&at=AC2mKKSVNcfRjalrnKGOlArdLhu1:1691264477630" download="sharon-shaju_resume.pdf"><Button className="button"><Image src={downloadArrow} className="download"/><div className="download-text">Download Resume</div></Button></a>
    </div>
  );
}

export default ContactDetails;
