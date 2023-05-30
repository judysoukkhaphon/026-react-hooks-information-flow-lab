import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* Refactor <header> and use Header component instead.
      
      PREVIOUS code defined a <header> element (for reference):
    
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
        
        */}

      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />    
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
