// Signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [nameError, setNameError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the name error when the user types in the name field
    if (name === 'name') {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if the name contains only letters
    const isValidName = /^[a-zA-Z]+$/.test(formData.name);

    if (!isValidName) {
      setNameError('Name must contain only letters');
      return; // Prevent form submission
    }

    // Add your signup logic here, e.g., send data to the server
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h1 style={{ color: '#ffffff', textAlign: 'center' }}>Sign Up</h1>
      {nameError && <p style={{ color: 'red', textAlign: 'center' }}>{nameError}</p>}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit" disabled={nameError !== ''}>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
