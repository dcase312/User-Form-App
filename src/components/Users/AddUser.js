//adding state so that the input for username will change once entered
import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

//function that invokes when the form is submitted and prevents the default which is the page reloading
const AddUser = (props) => {
    //destructured array takes 2 params, a value and a function and its defualt is set to an empty string
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const usernameChangeHandler = (event) => {
        //gets value through event object by accessing the target of event(input) and the value(property)
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        //gets value through event object by accessing the target of event(input) and the value(property)
        setEnteredAge(event.target.value)
    };

    //this function saves the changes from username and age fields when the form is submitted
    const addUserHandler = (event) => {
        event.preventDefault();
        //checks for if fields are empty, if so display the error message 
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        //checks for if the value in age field is 0 or less. '+' signals that the value is a number not a string
        if (+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        //executing the addUserHandler function from app.js that adds each new user entry to an array
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    
    //function that gives setError the value of null
    const errorHandler = () => {
        setError(null)
    }

    //JSX function that allows us to put html in react
    return(
        <div>
            {/* javascript expression that states if there is an error, show the error modal, if not don't render */}
            {/* onConfirm is set to a function that gets rid of the error modal when clicked on the cancel button or outside of the pop-up */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {/* holds the form for user information */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    {/* onChange activates a function once the input and label fields are changed by the user */}
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    {/* the value for the inputs are changed to an empty string on submission */}
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

//allows us to export the code to another file
export default AddUser