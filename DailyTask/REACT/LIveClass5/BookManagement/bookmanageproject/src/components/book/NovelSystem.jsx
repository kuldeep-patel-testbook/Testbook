import React from 'react'
import { useState } from 'react';

const NovelSystem = () => {
    const [form, setForm] = useState({ title: '', author: '', description: '', category: '' });
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isEditing, setIsEditing] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);

    const handleChange = (e) => {
        console.log('Handle Change');
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        isEditing ? updateBook({...form, id:currentBook.id}) : addBook(e);
    }

    const addBook = (e) => {
        e.preventDefault();
        setBooks([...books, { ...form, id: Date.now() }]);
        setForm({ title: '', author: '', description: '', category: '' });
    }

    const updateBook = (updatedBook) => {
        setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    }

    const startEdit = (book) => {
        setIsEditing(true);
        setCurrentBook(book);
        setForm(book);
    }

    const startDelete = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    const resetForm = () => {
        setIsEditing(false);
        setCurrentBook(null);
        setForm({title:'', author: '', description: '', category: ''});
    }

    const filteredBooks = books.filter(
        book =>
            (selectedCategory === 'All' || book.category === selectedCategory) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <>
            <div className="App">
                <h1>Novel Management System</h1>
                <form onSubmit={handleSubmit}>
                    <h2>{isEditing ? 'Edit Novel' : 'Add Novel'} </h2>
                    <input type="text" name='title' placeholder='Title' value={form.title} onChange={handleChange} />
                    <input type="text" name='author' placeholder='Author' value={form.author} onChange={handleChange} />
                    <input type="text" name='description' placeholder='Description' value={form.description} onChange={handleChange} />
                    <select title='category' name="category" id="category" value={form.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Action">Action</option>
                    </select>
                    <button type='submit'>{isEditing ? 'SAVE' : 'ADD'}</button>
                    {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
                </form>

                <div className="search-container">
                    <input type="text" placeholder='Search by title or author' name='searchQuery' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    <select title='selected category' name="selectedCategory" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                        <option value="All">Filter By Category Name</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Action">Action</option>
                    </select>
                </div>

                <h2>Novel List</h2>


                <div className="BookList">
                    {
                        filteredBooks.map(book => (
                            <div key={book.id} className='Book'>
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.category}</p>
                                <button onClick={() => startEdit(book)}>Edit</button>
                                <button onClick={() => startDelete(book.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NovelSystem