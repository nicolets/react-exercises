import React, {useState} from 'react';
import './List.css';

function List() {

	// eslint-disable-next-line no-unused-vars
	const [items, setItems] = useState([
		'First item',
		'Second item',
		'Third item',
		'Fourth item'
	]);

	return (
		<div className="List">
			<h3>List:</h3>
			<p>Display a bullet point list of all the `items` in the state.</p>
			<ul>
				{items.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		</div>
	);
}

export default List;
