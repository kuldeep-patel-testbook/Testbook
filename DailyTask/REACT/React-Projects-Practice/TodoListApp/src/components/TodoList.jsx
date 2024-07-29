import React, { useState } from 'react'
import './TodoList.css';
import editIcon from "./material-symbols_edit.png";
import deleteIcon from "./ic_round-delete.png";

const TodoList = () => {
    const [taskName, setTaskName] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isError, setIsError] = useState('');

    const addTask = (e) => {
        e.preventDefault();

        if(taskName.trim() === '') {
            setIsError('Task name cannot be empty!');
            return;
        }

        if (taskName.trim()) {
            const newTask = {
                id: Date.now(),
                taskName: taskName,
                completed: false
            }
            setTodoList([...todoList, newTask]);
            setTaskName('');
            setIsError('');
        };

    }

    const editTask = (task) => {
        setIsEditing(true);
        setCurrentTask(task);
        setTaskName(task.taskName);
        setIsError('');
    }

    const updateTask = (e) => {
        e.preventDefault();
            
        if(taskName.trim() === '') {
            setIsError('Task name cannot be empty!');
            return;
        }

        if (taskName.trim() && currentTask) {
            const updateTasks = todoList.map((task) =>
                task.id === currentTask.id ? { ...task, taskName: taskName } : task
            );
            setTodoList(updateTasks);
            setTaskName('');
            setIsEditing(false);
            setCurrentTask(null);
            setIsError('');
        }
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    }

    return (
        <>
            <div className='todolistContainer'>
                <div className="todoaddsection">
                    <h2>{isEditing ? "Edit Form" : "Add Form"}</h2>
                    <div className="todoMain">
                        <form onSubmit={isEditing ? updateTask : addTask} className="taskForm">

                            <input type="text" className="inputField" id='taskName' name='taskName' value={taskName}
                                onChange={(e) => setTaskName(e.target.value)} placeholder='Please text here...' />
                            <button type='submit'>{isEditing ? "Update Task" : "Add Task"}</button>
                            
                        </form>
                        
                    </div>
                </div>
                {isError && <div className="error">{isError}</div>}
                <hr />
                <div className="todolist">
                    <h2>TodoList</h2>
                    <div className="listInside">
                        <ul>
                            {
                                todoList.map((task, index) => (
                                    <li key={index}>
                                        <span>{task.taskName}</span>
                                        <span>
                                            <a className="editTask" href='#editTask' onClick={() => editTask(task)}><img src={editIcon} alt="edit-task" /></a>
                                            <a className="deleteTask" href='#deleteTask' onClick={() => deleteTask(task.id)}><img src={deleteIcon} alt="delete-task" /></a>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TodoList