import React from 'react';

const User = (props) => {
    console.log(props);
    const {name, username, email, company, phone, website, address} = props.user;
    const userStyle = {
        backgroundColor: 'lightblue',
        borderRadius: '15px',
        margin: '10px',
        padding: '10px'
    };
    return (
        <div style={userStyle}>
            <h3>User : {props.user.id} - Name : {name}</h3>
            <h4>Username: {username}</h4>
            <p>Email: {email}</p>
            <p>Company: {company.name}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <p>City: {address.city}</p>
        </div>
    );
};

export default User;