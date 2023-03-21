import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UsersList = (props) =>{
    return (
        <Card className={classes.users}>
            <ul>
                {/* maps array of users to a an array of jsx elements*/}
                {props.users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;