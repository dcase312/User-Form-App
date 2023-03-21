//Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.

import React, { useState } from 'react';

import './styles.css';


export default function App() {
    //default value is 0 and is set to an array that holds a variable and a function
    const [increment, setIncrement] = useState(0)
    
    //function takes another function that takes the previous value and adds one to it
    const incrementHandler = () => {
        setIncrement(
            prevIncrement => prevIncrement + 1
        );
    }
    
    return (
      <div>
        {/* value dynamically placed so when it increments it updates */}
        <p id="counter">{increment}</p>
        {/* when button is clicked, invoke the function that increments the value by 1 */}
        <button onClick={incrementHandler}>Increment</button>
      </div>
    );
}