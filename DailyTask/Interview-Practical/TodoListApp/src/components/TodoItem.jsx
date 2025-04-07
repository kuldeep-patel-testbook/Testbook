import React from 'react'
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <>
            <li className={`todo-item ${todo.completed ? 'completed' : ""}`}>
                <input type='checkbox' checked={todo.completed} onChange={() => onToggle(todo.id)} />

                <span onClick={() => onToggle(todo.id)} className='todo-text'>
                    {todo.text}
                </span>
                <span>
                    <button className="deleteTask" onClick={() => onDelete(todo.id)}>
                        Delete
                    </button>
                </span>
            </li>
        </>
    )
}

export default TodoItem