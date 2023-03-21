import React from "react";
import classes from './Card.module.css'

//creating card component to hold form
const Card = (props) => {
    return(
        //accessing the properties of Card component from AddUser.js
        //two classes applied, one from card.module.css and the other from the props
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card;