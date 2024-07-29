import React, { Component } from 'react'
import './BookSystem.css'
export class BookSystem extends Component {
    
    state = {
        books: [],
        title: "",
        author: "",
        cost: "",
        rating: "",
        description: "",
        category: "",
        searchQuery: "",
        selectedCategory: "All"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSearch = (e) => {
        this.setState({searchQuery:e.target.value})
    }
    addBook = (e) => {
        e.preventDefault();
        console.log(this.state);

        const newBook = {
            id: Date.now(),
            title: this.state.title,
            author: this.state.author,
            cost: this.state.cost,
            rating: this.state.rating,
            description: this.state.description,
            category: this.state.category
        };

        this.setState(prevState => ({
            books: [...prevState.books, newBook]
        }));


    }
    render() {
        const { books, searchQuery, selectedCategory } = this.state;
        const filterNovels = books.filter(book=>
            (selectedCategory === "All" || book.category === selectedCategory) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        
        return (
            <>
                <div className="container">
                    <div className="main">
                        <h1>Novel Management System</h1>
                        <div className="heading">
                            <h3>Enter Book Details</h3>
                        </div>

                        <form onSubmit={this.addBook}>
                            <div className="formData">
                                {/* Drop Down Field */}
                                <div className="dropdown">
                                    <select title='category' className='selectCategory selectFilter' name='category' onChange={this.handleChange}>
                                        <option value="">Please select book category</option>
                                        <option value="Fiction">Fiction</option>
                                        <option value="Non-Fiction">Non-Fiction</option>
                                        <option value="Romantic">Romantic</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Thirller">Thirller</option>
                                        <option value="Action">Action</option>
                                        <option value="Biopic">Biopic</option>
                                    </select>
                                </div>
                                {/* Title Field */}
                                <div className="title">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" id="title" onChange={this.handleChange} />
                                </div>
                                {/* Author Field */}
                                <div className="author">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" name="author" id="author" onChange={this.handleChange} />
                                </div>

                                {/* Cost Field */}
                                <div className="cost">
                                    <label htmlFor="cost">Cost</label>
                                    <input type="text" name="cost" id="cost" onChange={this.handleChange} />
                                </div>

                                {/* Rating Field */}
                                <div className="rating">
                                    <label htmlFor="rating">Rating</label>
                                    <input type="text" name="rating" id="rating" onChange={this.handleChange} />
                                </div>

                                {/* Description Field */}
                                <div className="description">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" name="description" id="description" onChange={this.handleChange} />
                                </div>
                            </div>

                            {/* Button Field */}
                            <div className="btn">
                                <button className='btnadd'>Add Book</button>
                            </div>

                        </form>

                        <div className="searchFilter">
                            <div className="userSearch">
                                <input type="text" placeholder='Search by title or author' name="search" value={searchQuery} onChange={this.handleSearch} />
                            </div>

                            <div className="filter">
                                <select title='filter category' className='selectCategory selectFilter' name='filterCategory'>
                                    <option value="">Please select Filter</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Romantic">Romantic</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Thirller">Thirller</option>
                                    <option value="Action">Action</option>
                                    <option value="Biopic">Biopic</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Display Novels List */}
                    <div className="displayNovels">
                        <h2>Novels List</h2>
                        {filterNovels.map(book =>
                            <div className="displayNovelList" key={book.id}>
                                <div className="listInside">
                                    <h4>Title: {book.title}</h4>
                                    <p>Author: {book.author}</p>
                                    <p>Cost: {book.cost}</p>
                                    <p>Rating: {book.rating}⭐</p>
                                    <p>Description: {book.description}</p>
                                    <p>Category :{book.category}</p>
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

export default BookSystem