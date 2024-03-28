import React, { useState ,createContext,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
 import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for routing
import './login.css'
import axios from 'axios';


const UserLoginContext = createContext();

const Login = ({children}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userlogin, setUserLogin] = useState('');

  const handleLogin = async () => {
    try {
       // Make a request to the server's login endpoint
       const response = await axios.post('http://localhost:2000/log', {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
      

      if (response.status===200) {
        // If login is successful, notify the parent component
        
        
          console.log('User is present');
          setUserLogin('login true go back');
          // Call a function passed as a prop to handle successful login
          // onLogin(data);
        } else {
          console.error('Login failed:');
        }
      
    } catch (error) {
      console.error('Server error:', error);
      setUserLogin('login true go back');
    }
  };

  const handleForgot = () => {
    
  };

  const handleRegister = () => {
   
  };

  return (
    <>
     <UserLoginContext.Provider value={{ userlogin }}>
     {children}
     
      <div className="Login" style={{ marginTop: "20px", border: "1px solid gray", width: "500px", margin: " 40px auto",height:"600px" }}>
        {/* <Tables setlog={userlogin}/> */}
        <Form>
          <h3 className='heading' style={{textAlign:"center"}}>Login Form</h3>
          <Form.Group  className='heading' controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='heading' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {userlogin}
          {/* <span onClick={handleForgot}><Link to="#">Forgot Password!!</Link></span> */}
          <div className='mt-3 d-flex justify-content-between heading'>
            <Button className='mt-3' variant="primary" type="button" onClick={handleLogin}>
              Submit
            </Button>
            <Button onClick={handleRegister} className='mt-3' variant="primary" type="button">
              Register Here
            </Button>
          </div>
        </Form>
      </div>
      </UserLoginContext.Provider>
    </>
  );
};

const useUserLogin = () => useContext(UserLoginContext);

export {UserLoginContext,Login}
