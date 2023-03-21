import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return(
        <div>
            {/* allows us to insert a class that gives the modal a backdrop */}
            <div className={classes.backdrop} onClick={props.onConfirm} />
            {/* creating a card that holds our error modal */}
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
};

export default ErrorModal