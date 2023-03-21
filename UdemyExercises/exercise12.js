//Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.
//The style should be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).

import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    //default for the useState is false
    const [newColor, setNewColor] = React.useState(false);
    
    //function that sets a new state 
    const clickHandler = () => {
        //if there is a new color, it resets it to no new color
        setNewColor(newColor => !newColor)
    }
    
    return (
        <div>
            {/* dynamically adding css class */}
            {/* if there is a new color, class name is set to active, otherwise it's set to an empty string */}
            <p className={newColor ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
