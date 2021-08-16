import React, { useState } from 'react';
import './YayValidator.css';

function YayValidator() {

	const [text, setText] = useState('');

	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input type="text" className="text-box" value={text} onChange={e => setText(e.target.value)} style={{background: text === 'yay' ? 'green' : null}} />
		</div>
	);
}

export default YayValidator;
