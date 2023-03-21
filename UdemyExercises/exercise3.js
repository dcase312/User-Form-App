//Your task is to build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.

import React from 'react';
//importing a component from another file to add to this one
import ExerciseComponent from './ExerciseComponent'


// allows it to be imported into another file
export default function App() {
    return (
    //custom component tag that was imported from another file that we're able to write as an element in another file. 
    //The first letter of the element name is capitalized to indicate that it's not a built in html element
    <ExerciseComponent></ExerciseComponent>
    )
}
