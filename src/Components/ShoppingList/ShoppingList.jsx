import React, {  useState } from 'react'; 
import ShoppingForm from '../ShoppingForm/ShoppingForm';


function ShoppingItem({ id, item, quantity, deleteItem }) { 
    const [isEdit, setEdit] = useState(false); 

    function handleDelete(event) { 
        event.preventDefault(); 
        deleteItem(id); 
    } 

    function handleEdit(event) {
        event.preventDefault();
        setEdit((oldEditBoolean) => !oldEditBoolean);
    }

    function handleUpdate(item, quantity) {
        console.log(item, quantity);
        setEdit(false);
    }

    const ReadOnlyJsx = (
        <span>
            {item} ( { quantity})
        </span>
    );

    const EditJsx = (
        <ShoppingForm 
            submitItem={handleUpdate}
            submitButtonText="Update"
            defaultItem={item} 
            defaultQuantity={quantity} />
    );

    return ( 
        <li> 
            {isEdit ? EditJsx : ReadOnlyJsx}
            <button onClick={handleDelete} disabled={isEdit}>
                Delete</button>  
            <button onClick={handleEdit}>
                {isEdit ? "Cancel" : "Edit"}
                </button>       
        </li> 
    ); 
} 

 
export default function ShoppingList({ items, deleteItem }) { 
    const ItemsJsx = items.map(listItem =>  
        <ShoppingItem  
            key={listItem.id}  
            id={listItem.id} 
            item={listItem.item}  
            quantity={listItem.quantity} 
            deleteItem={deleteItem} /> 
    ); 
 
    return <ul>{ItemsJsx}</ul>; 
} 