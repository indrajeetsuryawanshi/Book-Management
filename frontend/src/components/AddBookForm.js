import React, { useState } from 'react';
import axios from 'axios';
import './AddBookForm.css'; 

const AddBookForm = ({submitHandler}) => {
  const [formData, setFormData] = useState({ title: '', author: '', genre: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/books', formData);
      submitHandler(false);
      alert('Book added successfully!');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-book-form-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
        <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
