import './css/listItem.css'

function ListItem(props) {
  return (
   <div className="cards-wrapper">
     <h4>{props.skill}</h4>
   </div>
  );
}

export default ListItem;