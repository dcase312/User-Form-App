//You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.
//The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.
//The first product item is expected to display the following information:
//Title: Product 1 Price: 10 Description: First product
//The second product item is expected to display the following information:
//Title: Product 2 Price: 20 Description: Second product

import React from 'react';

//importing product component
import Product from './Product';
import './styles.css';


export default function App() {
    //product is an array that holds 2 objects which have keys of title, price, and description
    const product = [
     {title: 'Product 1',
     price: 10,
     description: 'First product'},
     {title: 'Product 2',
     price: 20,
     description: 'Second product'}]

    return (
        <div>
            <h1>My Demo Shop</h1>
            {/* inserting the product component where each property is being set to a dynamic value that pulls from the array product */}
            <Product title={product[0].title} price={product[0].price} description={product[0].description} />
            <Product title={product[1].title} price={product[1].price} description={product[1].description} />
        </div>
    );
}
    