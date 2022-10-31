
import Item from "../ItemList/Item";
import "./ItemList.css";

function ItemListContainer() {
  return (
    <div className="item__list">
      <Item 
      greeting="Bienvenido" 
      />
      
    </div>
  );
}

export default ItemListContainer;
