//You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing.
//If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    //useState has a default value of invalid and is equal to an array that contains a variable and a function
    const [message, isValidMessage] = useState('Invalid')
    
    //a function that takes an event object as a parameter and the function determines the length of input and says if it's valid or not
    const messageChangeHandler = (event) =>{
        //creating variable value and setting it equal to the event target value
        const value = event.target.value;
        //if the length of the value with no white spaces is less than 3 return function with string invalid
        if (value.trim().length < 3){
        return isValidMessage('Invalid')
        //if the length of the value with no white spaces is more than 3 return function with string valid
    } else {
        return isValidMessage('Valid')
    }
    }
    
    return (
        <form>
            <label>Your message</label>
            {/* when the field gets edited or changed, the messageChangeHandler function executes */}
            <input type="text" onChange={messageChangeHandler} />
            <p>{message} message</p>
        </form>
    );
}