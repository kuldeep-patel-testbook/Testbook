import React, { useState } from 'react';
import './BookSystem.css';

const BookSystem = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: '', author: '', category: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const addBook = (e) => {
        e.preventDefault();
        setBooks([...books, { ...form, id: Date.now() }]);
        setForm({ title: '', author: '', category: '' });
    };

    const updateBook = (updatedBook) => {
        setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
        resetForm();
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    const startEdit = (book) => {
        setIsEditing(true);
        setCurrentBook(book);
        setForm(book);
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentBook(null);
        setForm({ title: '', author: '', category: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isEditing ? updateBook({ ...form, id: currentBook.id }) : addBook(e);
    };

    const filteredBooks = books.filter(
        book =>
            (selectedCategory === 'All' || book.category === selectedCategory) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return (
        <div className="App">
            <h1>Book Management System</h1>

            <form onSubmit={handleSubmit}>
                <h2>{isEditing ? 'Edit Book' : 'Add Book'}</h2>
                <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
                <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
                <select name="category" value={form.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Classic">Classic</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                </select>
                <button type="submit">{isEditing ? 'Save' : 'Add Book'}</button>
                {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>

            <div>
                <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <select value={selectedCategory} onChange={e => e.target.value}>
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Classic">Classic</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                </select>
            </div>

            <h2>Book List</h2>
            <div className="BookList">
                {filteredBooks.map(book => (
                    <div key={book.id} className="Book">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.category}</p>
                        <button onClick={() => startEdit(book)}>Edit</button>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSystem