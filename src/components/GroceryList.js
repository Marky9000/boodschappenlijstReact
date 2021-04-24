import React from 'react'
import '../container.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function GroceryList(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div key={item.key} className="listGroceries">
             <FontAwesomeIcon icon={faShoppingCart} className="faiconsCart" onClick={() => props.itemToBasket(item.title)} />
                {item.title}<span> <FontAwesomeIcon icon={faTrash} className="faicons"
                onClick={() => props.deleteItem(item.key)} /></span>
       </div> 
    })

    return (
        <li >{listItems}</li>
    )
}


export default GroceryList 