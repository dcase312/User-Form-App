//You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically. For this task, a Todo component has been prepared for you, though you must still add some code to it to receive and output the todo text.
//To be more precise: In the App component, you should transform the DUMMY_TODOS array that's provided to you (which must not be changed!) to a list of JSX elements (<Todo> elements to be precise). Every Todo component item must receive and output the todo text via a prop called text.

import React from 'react';

//importing Todo's code
import Todo from './Todo';
import './styles.css';

//an array that holds strings
const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return (
        <ul>
          {/* map is turning the original array of dummy data to the Todo component which holds property text and executes for each index in the array */}
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}


