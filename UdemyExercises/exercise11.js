//Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.
//The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

import React, { useState } from 'react';


export default function App() {
    //default for the useState is false
    const [newColor, setNewColor] = useState(false);
    
    //function that sets a new state 
    const clickHandler = () => {
        //if there is a new color, it resets it to no new color
        setNewColor(newColor => !newColor)
    }
    return (
        <div>
            {/* dynamically applied inline css styling */}
            {/* style prop is set to a javascript object that contains the css style properties */}
            {/* if there is a new color, set color to red, if not white */}
            <p style={{color: newColor ? 'red' : 'white'}}>Style me!</p>
            {/* color resets once button is clicked */}
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

