import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="conatiner">
        <h1>Book Managemt System</h1><br />
        <div className="addform">
          <h2>Add Book</h2>
          <form method='post'>
            <div className="form-group">
              <div className="row">
                <label htmlFor="title">Title:</label>
                <input type="text" name='title'  required />
              </div><br />
              <div className="row">
                <label htmlFor="author">Author:</label>
                <input type="text" name='author'  required />
              </div><br />
              <div className="row">
                <label htmlFor="price">Price:</label>
                <input type="text" name='price'  required />
              </div>
              <button type="button"   >Add Book</button>
            </div>
          </form>
        </div>

        <br /><br />
        
        <div className="listbook">  
          <h2> Book List</h2><br />
          
        </div>
      </div>
    </>
  )
}

export default App
