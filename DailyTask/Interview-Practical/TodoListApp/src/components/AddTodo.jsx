import React, { useState } from 'react'
import './AddTodo.css';

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [isError, setIsError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            setIsError("Task cannot be a empty");
            return;
        }

        onAdd(text.trim());
        setText("");
        setIsError("");
    };

    return (
        <>
            <div className="todoMain">
                <form onSubmit={handleSubmit} className='add-todo-form'>
                    <input className='inputField' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a new task...' />
                    <button className='add-button' type='submit'>Add</button>
                </form>
            </div>
            {isError && <div className="error">{isError}</div>}
        </>
    )
}

export default AddTodo