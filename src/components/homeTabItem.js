import './css/homeTabItem.css'
import Image from 'react-bootstrap/Image'

function homeTabItem(props) {
   return <div className="card-wrapper">
     <Image src={props.image} className="tab-item-img"/>
     <div className="tab-item-name">{props.name}</div>
   </div>
}

export default homeTabItem;