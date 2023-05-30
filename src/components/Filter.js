import React from "react";

/*
Refactor <select> out of ShoppingList component, and replace with this Filter component instead.
*/

function Filter({onCategoryChange}){


    return(
        <select onChange={onCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>      
        </select>
    )
}

export default Filter;