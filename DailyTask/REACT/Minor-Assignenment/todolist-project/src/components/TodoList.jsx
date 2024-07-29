import React, { Component } from 'react';
import editIcon from "./material-symbols_edit.png";
import deleteIcon from "./ic_round-delete.png";
import './TodoList.css';

export class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            taskName: '',
            tasklist: [],
            isEditing: false,
            currentTask: null,
            error: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;

        this.setState({
            taskName: value,
            error: ''
        });

    }

    onAddTask = (e) => {
        e.preventDefault();
        console.log(this.state);

        if(this.state.taskName.trim() === '') {
            this.setState({ error: 'Task name cannot be empty!'});
            return;
        }

        const newTask = {
            id: Date.now(),
            taskName: this.state.taskName
        };

        this.setState(prevState => ({
            tasklist: [...prevState.tasklist, newTask],
            taskName: '',
            error: ''
        }));

    }

    editTask = (task) => {
        console.log(task);
        this.setState({
            isEditing: true,
            currentTask: task,
            taskName: task.taskName,
            error: ''
        });
    }

    updateTask = (e) => {
        e.preventDefault();

        if(this.state.taskName.trim() === '') {
            this.setState({ error: 'Task name cannot be empty!'});
            return;
        }

        const { taskName, currentTask, tasklist } = this.state;

        const updateTaskList = tasklist.map(task =>
            task.id === currentTask.id ? { ...task, taskName } : task
        )

        this.setState({
            tasklist: updateTaskList,
            taskName: '',
            isEditing: false,
            currentTask: null,
            error: ''
        });
    }

    deleteTask = (id) => {
        const updateTaskList = this.state.tasklist.filter(task => task.id !== id);
        this.setState({
            tasklist: updateTaskList
        })
    }

    render() {
        const { tasklist, taskName, isEditing, error } = this.state;

        return (
            <>
                <div className='App'>
                    <form onSubmit={isEditing ? this.updateTask : this.onAddTask}>
                        <div className="inputField">
                            <input type="text" placeholder='Type your task' name='taskName' value={taskName} onChange={this.handleChange} />
                            <button className="custombtn">{isEditing ? 'Update Task' : '+Add Task'}</button>
                        </div>
                        {error && <div className="error">{error}</div>} 
                    </form>

                    <div className="displayTodo">
                        <h2>Todo List</h2>
                        {
                            tasklist.map((task, key) =>
                                <div className="todolist" key={key}>
                                    <div className="listInside">
                                        <span>{task.taskName}</span>
                                        <button className="editTask" onClick={() => this.editTask(task)}><img src={editIcon} alt="edit-task" /></button>
                                        <button className="deleteTask" onClick={() => this.deleteTask(task.id)}><img src={deleteIcon} alt="delete-task" /></button>
                                    </div>
                                </div>
                            )
                        }

                    </div>


                </div>
            </>

        )
    }
}

export default TodoList