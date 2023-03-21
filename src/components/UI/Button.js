import React from "react";

import classes from './Button.module.css';

const Button = (props) => {
    return(
        //type set to a dynamic value and an alternative 'button' value as a fall-back if the first is undefined
        <button 
            className={classes.button} 
            type={props.type || 'button'} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
};

export default Button