import React, { useState } from 'react';
// import './Login.css'; 
import { useNavigate } from 'react-router-dom';

const HospitalLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

//   const [token, setToken] = useState(null);
// let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://68.183.87.102:8080/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) { 
//         const data = await response.json();
//         setToken(data.jwtToken);
//         navigate('/')
//         console.log('Login successful, token:', data.jwtToken);
//         sessionStorage.setItem('token', data.jwtToken);
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

function handleSubmit(e){
e.preaventDefault()
console.log(FormData)
}
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
     
    </div>
  );
};

export default HospitalLogin;
