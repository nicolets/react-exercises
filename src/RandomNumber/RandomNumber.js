import React, { useState } from 'react';
import './RandomNumber.css';

function RandomNumber() {

	const [num, setNum] = useState(null);

	function chooseRandomNumber() {
		setNum(Math.round(Math.random() * 100));
	}

	return (
		<div className="RandomNumber">
			<p className="RandomNumber__explanation">
				When clicking on the button, make a random number (between 1-100) to appear in the box.
			</p>

			<button onClick={chooseRandomNumber}>Generate number!</button>
			<div className="box">
				{num}
			</div>
		</div>
	);
}

export default RandomNumber;
