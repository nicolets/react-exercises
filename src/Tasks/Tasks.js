  
import React, {useState} from 'react';
import './Tasks.css';
import Task from './Task'

function Tasks() {

	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	function onSubmit (e) {
		e.preventDefault();
		if (task.trim().length === 0) {
			return;
		}
		setTasks([...tasks, task]);
		setTask('');
	}
	
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			
			<form onSubmit={onSubmit}>
				<input placeholder="Your task..." value={task} onChange={(e) => setTask(e.target.value)} /> <button>Add task</button>
			</form>
			
			<ul>
				{tasks.map((task, i) => <Task key={i} id={i}>{task}</Task>)}
			</ul>
		</div>
	);
}

export default Tasks;