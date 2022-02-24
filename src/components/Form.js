import React from 'react';
import './Form.css';

const Form = () => (
  <div className="form-container">
    <h1>ADD NEW BOOK</h1>
    <div className="form-inputs">
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);

export default Form;
