import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  //adding state to the app component to control the state of the children components
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    //function for creating new object for every user by adding to the previous user list array
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      {/* this element adds the adduser component to our application */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
