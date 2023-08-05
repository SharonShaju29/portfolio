import Image from 'react-bootstrap/Image'
import './css/workExperience.css'
import internship from '../Assets/internship.png'
import quinbay from '../Assets/quinbay.jpg'
import WorkDescription from './workDescription'

function WorkExperience() {
  return <div>
    <div className="work-title-header">
    <Image src={internship} className="image-dsg"/>
    <h2 className="title-dsg">Internships</h2>
    <div className="horizontal-ruler"/>
  </div>
  <Image src={quinbay} className="work-place"/>
  <WorkDescription/>
   </div>
}

export default WorkExperience;