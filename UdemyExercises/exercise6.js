//You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.

//Your task is to add an event listener to listen for clicks on the button that's already included in the App component.

//Upon a button click, the price should change from $100 to $75.

//Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

import React, { useState } from 'react';

import './styles.css';

export default function App() {
    //creating a useState for the price change and setting the default to 100 and setting it equal to an array that holds the value and the function that changes the value
    const [price, getPrice] = useState(100)
    
    //creating a function that when clicked, it returns the new price
    const clickHandler = () => {
        return getPrice(75)
    }
    
    return (
        <div>
            {/* dynamically setting the price */}
            <p>${price}</p>
            {/* adding the onClick attribute that points to the clickHandler function so that when the button is clicked the funtion gets activated */}
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
