import React from 'react';

//function takes in properties 
export default function Product(props) {
    return (
        <article className="product">
            {/* dynamic data accessed by one of the propertied which is title */}
            <h2>{props.title}</h2>
            {/* dynamic data accessed by one of the propertied which is price */}
            <p className="price">${props.price}</p>
            {/* dynamic data accessed by one of the propertied which is description */}
            <p>{props.description}</p>
        </article>
    );
}
