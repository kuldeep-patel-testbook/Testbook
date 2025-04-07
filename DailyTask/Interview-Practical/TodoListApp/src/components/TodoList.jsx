import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return <p className='no-task-found'>No todo task found.</p>
    }
    return (

        <div className="listInside">
            <ul>
                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList