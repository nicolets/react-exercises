import React, { useState } from 'react';
import './Counter.css';

function Counter() {
	
	const [num, setNum] = useState(0);
	
	function increase() {
		setNum(num + 1);
	}

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={increase}>Increase</button>
			<div className="Counter__value">{num}</div>
		</div>
	);
}

export default Counter;
