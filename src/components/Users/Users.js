import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h2 style={{backgroundColor: 'tomato', margin: '10px', padding: '5px', borderRadius: '5px'}}>REST Users & REST Photos</h2>
            <h1>Total Users: {users.length}</h1> 
            {
                users.map(user => <User 
                user={user}
                key={user.id}
                ></User>) 
            }       
        </div>
    );
};

export default Users;