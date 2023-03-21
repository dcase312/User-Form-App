//For this exercise, imagine that colleagues gave you code they wrote for a React app they're working on.
//At the moment, this code is failing and it's your job to find and fix all errors that are hiding in the code.

//original:

// import './styles.css';

// export default function App() {
//     const clickHandler = () => {
//         console.log('Clicked!');
//     };
    
//     return (
//         <Div>
//           <h2>You're logged in!</h2>
//           <p>Welcome to your user profile!</p>
//           <button onclick={clickHandler}>Click me!</button>
//         </Div>
//     );
// }


//reviewed:
import React from 'react';

import './styles.css';

export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        //this is a built in html element therefore it starts with a lowercase letter
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          {/* the first 'c' in onClick must be capitalized because event listeners use camelcase to define the event name, which in this case is 'click', otherwise they won't work */}
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}

