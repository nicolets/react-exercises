
import React from 'react';

function Task(props) {
    return (
        <li id={props.id}>{props.children}</li>
    );
}

export default Task;