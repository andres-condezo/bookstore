import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const initialFormState = {
    title: '', author: '', category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      category: formState.author[0],
    };

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input name="title" type="text" onChange={handleChange} placeholder="Book Title" required />
        <input name="author" type="text" onChange={handleChange} placeholder="Book Author" required />
        <select name="category" id="categories" onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
