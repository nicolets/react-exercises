function Student(props) {
    
    function toDelete() {
        props.deleteLi(props.id)
    }
    
    return (
        <li>
            {props.children}
            <button onClick={toDelete}>Delete</button>
        </li>
        
    )
}

export default Student;