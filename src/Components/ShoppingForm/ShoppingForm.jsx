import React, {useState} from 'react'; 
 
export default function ShoppingForm( {
    submitItem,
    submitButtonText = "Add",
    defaultItem = "",
    defaultQuantity = ""
} ) { 
    const [item, setItem] = useState(defaultItem); 
    const [num, setNum] = useState(defaultQuantity); 

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        submitItem(item, num); 
    }  

 
    function handleItemChange(event) { 
        setItem(event.target.value); 
    } 

 
    function handleQuantityChange(event) { 
        setNum(event.target.value); 
    }     
 
 
    return ( 
        <form action="#" method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="item">Item:</label> 
            <input  
                type="text"  
                id="item"  
                name="item"  
                value={item}  
                onChange={handleItemChange}  
                required /> 
            <label htmlFor="quantity">Quantity:</label> 
            <input  
                type="number"  
                id="quantity"  
                name="quantity"  
                value={num}  
                onChange={handleQuantityChange}  
                required /> 
            <button type="submit">{submitButtonText}</button> 
        </form> 
    ); 
} 