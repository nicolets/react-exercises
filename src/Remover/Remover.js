import React, {useState} from 'react';
import './Remover.css';
import Student from './Student';

function Remover() {

	const [students, setStudents] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);

	function deleteLi(index) {
		setStudents(students.filter((student, i) => i !== index));
	}

	return (
		<div className="Remover">
			<h3>Remover:</h3>
			<p>Add a delete button for each student to remove it from the list.</p>
			<ul className="Remover__list">
				{students.map((student, index) => {
					return <Student key={index} id={index} deleteLi={deleteLi}>{student}</Student>; 
				})}
			</ul>
		</div>
	);
}

export default Remover;
