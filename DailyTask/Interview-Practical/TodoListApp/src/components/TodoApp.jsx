import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Filter from './Filter';
import TodoList from './TodoList';
import axios from 'axios';

import './TodoApp.css';

const TodoApp = () => {
    const FILTERS = {
        ALL: 'all',
        COMPLETED: 'completed',
        PENDING: 'pending'
    };

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(FILTERS.ALL);

    const fetchTodos = async () => {
        //load todos from local storage on mount
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        } else {

            try {
                const response = await axios.get('http://dummyjson.com/todos?limit=10');
                //console.log(response.data);
                const fetchedTodos = response.data.todos.map(todo => ({
                    id: todo.id,
                    text: todo.todo,
                    completed: todo.completed,
                }));
                setTodos(fetchedTodos);

                // save to local storage using onChange method
                localStorage.setItem('todos', JSON.stringify(fetchedTodos));

            } catch (error) {
                console.error('Error fetching todos from API:', error.message);
            }
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const filteredTodos = todos.filter(todo => {
        if (filter === FILTERS.COMPLETED) return todo.completed;
        if (filter === FILTERS.PENDING) return !todo.completed;
        return true;
    });

    const onToggle = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className='todolistContainer'>
            <h1 className="app-title"> Todo App</h1>
            <div className="todoaddsection">
                <AddTodo onAdd={addTodo} />
            </div>
            <div className="filtersection">
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <div className='todolistsection'>
                <TodoList todos={filteredTodos} onToggle={onToggle} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default TodoApp