import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [userRegistered, setUserRegistered] = useState('');
  const [phone, setPhone] = useState(''); 

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:2000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, phone, confirm }),
      });
      const data = await response.text();

      if (response.status===200) { 
        if (data) {
          console.log(data);
          if (password === confirm) {
            setUserRegistered('Registration successful. Please go back.');
          }
        } else {
          console.error('Registration failed:', data);
          setUserRegistered('Registration failed. Please try again.');
        }
      } else if (response.status === 403) {
        setUserRegistered('Use correct password or email');
      }
    } catch (error) {
      console.error('Server error:', error);
      setUserRegistered('Registration failed due to server error');
    }
  };

  return (
    <div className="d-flex flex-column justify-content-start" style={{ marginTop: "20px", border: "1px solid gray", width: "500px", margin: " 40px auto 10px", height: "600px" }}>
      <Form style={{ margin: "20px" }}>
        <h3 className='heading_reg' style={{ textAlign: "center" }}>Registration Form</h3>
      
        <Form.Group className='heading_reg' controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='heading_reg' controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='heading_reg' controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='heading_reg' controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form.Group>

        <div className='mt-3 d-flex justify-content-between heading'>
          <Button className='mt-3' variant="primary" type="button" onClick={handleRegistration}>
            Submit
          </Button>
          <Button className='mt-3' variant="primary" type="button" >
            Login
          </Button>
        
        </div>
        <div>{userRegistered}</div>
      </Form>
      
    </div>
  );
};

export default Registration;
