

import React from 'react';

//function takes in properties as a parameter
export default function Todo(props) {
    return(
        //returning a list item that has the dynamic value of props.text which is a property of Todo
         <li>{props.text}</li>
    )
}