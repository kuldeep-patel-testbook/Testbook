import React, { Component } from 'react'
import './Book.css'
class AllData extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);

        //this.setState({ [e.target.title]: e.target.value, [e.target.author]: e.target.value });

        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    addBook(e) {
        e.preventDefault();
        const newBook = {
            title: this.state.title,
            author: this.state.author
        }
        console.log(newBook);
        this.setState({
            title: "",
            author: "",
        });
    }
    render() {
        return (
            <>
                <h1>Book Management System</h1>
                <div className='bookForm'>
                    <form onSubmit={this.addBook}>
                        <h2>Add Book</h2>
                        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                        <input type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange} />
                        <button type="submit">Add Book</button>
                    </form>
                </div>

                <div className='bookList'>
                    <h2>Book List</h2>
                </div>

            </>
        )
    }
}
export default AllData;
