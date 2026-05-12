
import React, { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  


  const handleChange = (e) => {
   setFormData({  
    ...formData,[e.target.name]:e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("registration successfully");
    console.log(fromData);
  };

const containerStyle = {
  maxWidth: '450px',
  margin: '40px auto',
  padding: '30px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '18px',
};

const labelStyle = {
  marginBottom: '8px',
  fontWeight: '600',
  color: '#444',
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '15px',
  outline: 'none',
  transition: '0.3s',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.3s',
  marginTop: '10px',
};
  return (
      <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Contact Us</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password" style={labelStyle}>Password: </label>
        <input type='password'
        name='password'
        placeholder='enter your password'/>
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="address" style={labelStyle}>Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your full address..."
            required
            style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
          />
        </div>
        
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          submit
        </button>

      </form>
    </div>
  );
}

export default App;