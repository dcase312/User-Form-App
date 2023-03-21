//This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.
//Important: The custom JSX code must be added inside the existing <div> element.

//not needed since react is already imported
import React from 'react';

// don't change the Component name "App"
//JSX code must be written inside a fuction for react to render it
export default function App() {
    return (
        //wrapper div element that holds all our html code
        <div>
            {/* created an h1 element with text inside the wrapper div next to the p tag */}
            <h1>Exercise done!</h1>
            <p>Practicing React...</p>
        </div>
    );
}