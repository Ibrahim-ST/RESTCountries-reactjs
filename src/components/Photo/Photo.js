import React from 'react';
import './Photo.css'
const Photo = (props) => {
    return (
        <div className='photo'>
            <h2>Photo No: {props.id}</h2>
            <h3>Title : {props.title}</h3>
            <img src={props.img} alt="" />
        </div>
    );
};

export default Photo;