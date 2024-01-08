import React, { useState } from 'react';
import axios from 'axios'; // Make sure to have Axios installed

const Loginform = () => {
  const [formData, setFormData] = useState({
    email: 'ipodashboard@gmail.com',
    password: 'ipodashboard'
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });

      // Handle successful login
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login errors
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Loginform;
