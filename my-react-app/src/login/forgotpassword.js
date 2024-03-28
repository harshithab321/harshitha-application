import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

const Forgotpass = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState('');
  const [reset, setReset] = useState('');
  
  const handleSendOtp = async () => {
    try {
      const response = await fetch('http://localhost:2000/ForgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.text();
        console.log(data)
      if (response.status === 200) {
        console.log(data);
        setReset('OTP sent successfully.');
      } else if (response.status === 403) {
        setReset('Use correct email.');
      }
    } catch (error) {
      console.error('Server error:', error);
      setReset('Sending OTP failed due to server error.');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:2000/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, confirm }),
      });
      const data = await response.text();

      if (response.status === 200) {
        console.log(data);
        if (otp === confirm) {
          setOtp('');
          setReset('Reset password successful. Please go back.');
        } else {
          setReset('OTP mismatch.');
        }
      } else if (response.status === 403) {
        setReset('Use correct email or OTP.');
      }
    } catch (error) {
      console.error('Server error:', error);
      setReset('Resetting password failed due to server error.');
    }
  };

  return (
    <div className="d-flex flex-column justify-content-start" style={{ marginTop: "20px", border: "1px solid gray", width: "500px", margin: " 40px auto 10px", height: "600px" }}>
      <Form style={{ margin: "20px" }}>
        <h3 className='heading_reg' style={{ textAlign: "center" }}>Forgot Password Form</h3>
      
        <Form.Group className='heading_reg' controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='heading_reg' controlId="formBasicOTP">
          <Form.Label>OTP</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='heading_reg' controlId="formBasicConfirm">
          <Form.Label>Confirm OTP</Form.Label>
          <Form.Control
            type="text"
            placeholder="Confirm OTP"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form.Group>

        <div className='mt-3 d-flex justify-content-between heading'>
          <Button className='mt-3' variant="primary" type="button" onClick={handleSendOtp}>
            Send OTP
          </Button>
          <Button className='mt-3' variant="primary" type="button" onClick={handleResetPassword}>
            Reset Password
          </Button>
        </div>
        <div>{reset}</div>
      </Form>
      
    </div>
  );
};

export default Forgotpass;
