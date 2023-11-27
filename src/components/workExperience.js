import Image from 'react-bootstrap/Image'
import './css/workExperience.css'
import internship from '../Assets/internship.png'
import quinbay from '../Assets/quinbay.jpg'
import WorkDescription from './workDescription'

function WorkExperience() {
  return <div>
    <div className="work-title-header">
    <Image src={internship} className="image-dsg"/>
    <h2 className="title">Internships</h2>
    <div className="horizontal-line"/>
  </div>
  <a href="https://www.quinbay.com/" target='_blank' ><Image src={quinbay} className="work-place"/></a>
  <WorkDescription/>
   </div>
}

export default WorkExperience;