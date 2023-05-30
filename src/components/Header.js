/* Refactor <header> out of App.js and use this Header component instead.
 Code to refactor from App.js (for reference to see how I've 'refactored' it as a component instead):
       <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>

Hint: 
How can we update state in one component from a child component?
YOU CAN PASS FUNCTIONS AS PROPS FROM PARENT TO CHILD.
THE PROPNAME (looks like DOM attribute) HAS A VALUE OF THE FUNCTION
WHEN THE PROP IS CALLED, IT CALLS THE FUNCTION IT CONTAINS
For information to propagate down the component tree, 
    parents pass props to their children
For information to propagate up the component tree, 
    we typically invoke callbacks that were passed from parents to children as props
*/
import React from "react";

function Header({onDarkModeClick, isDarkMode}){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    )
}


export default Header;