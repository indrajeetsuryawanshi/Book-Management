import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css'; 


const BooksList = ({reloadList}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if(reloadList){
      fetchBooks();
    }
  }, [reloadList]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/books');
      setBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
const deleteHandler = async (book) => {
  try {
    await axios.delete(`http://localhost:3001/api/books/${book._id}`);
    fetchBooks();
    alert(`Book with ID ${book._id} deleted successfully!`);
  } catch (error) {
    console.error('Error deleting books:', error);
  }
}
  return (
    <div className="book-list-container">
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="book-item">
            <span className="book-details">{book.title}</span> by {book.author} ({book.genre})
            <div className="book-actions">
              <button className="action-button update-button" >Update</button>
              <button className="action-button delete-button" onClick={() => deleteHandler(book)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
