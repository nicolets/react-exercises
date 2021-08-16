  
import React from 'react';

function DayOfWeek(props) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <span>{daysOfWeek[props.day]}</span>
    );
}

export default DayOfWeek;