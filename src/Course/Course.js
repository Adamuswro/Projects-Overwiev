import React from 'react';
import './Course.css';

const course = (props) => {
    return (
        <div className="Course">
            <p onClick={props.click}>Link to the project</p>
            <p>Project <b>{props.name}</b>. <b>Description:</b> {props.description} {props.children}. Current status: {props.status}</p>
        </div>
    )
}

export default course;