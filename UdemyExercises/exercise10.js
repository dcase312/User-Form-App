//You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.
//Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

import React, { useState } from 'react';


export default function App() {
    //useState default set to false, equals an array with a variable and a function
    const [isDeleting, setIsDeleting] = useState(false)
    
    //a function that when the delete button is pressed, deleting takes place
    const isDeletingHandler = () => {
        return setIsDeleting(true)
    }
    
    //a function that when proceed button is pressed, no deleting takes place
    const proceedHandler = () => {
        return setIsDeleting(false)
    }
    
    return (
      <div>
        {/* checks for value and executes handler function based on whether the button was pressed or not*/}
        {isDeleting && <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>}
        <button onClick={isDeletingHandler}>Delete</button>
      </div>    
    );
}