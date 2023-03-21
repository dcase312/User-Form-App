//Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).

//To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".

import React from 'react';

import './styles.css';
//creating a function that console logs a string
const connect = () => {
    console.log('Stored!')
}
export default function App() {
    //returning that function in the button so that once cliked the funtion executes
    //onClick allows us to program a function that should take place once the element that attribute is on gets clicked
    //we point to the function instead of executing it with parentheses so it doesn't execute right away and only when clicked
    return <button onClick={connect}>Bookmark</button>;
}


