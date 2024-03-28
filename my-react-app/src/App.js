import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './dsahboard/navbar';
import Side from './dsahboard/sidebar';

import Registration from './login/Registraion';
import Profile from './profile/profile'
import {Login} from './login/Log';
import Tables from './dsahboard/table';
const App = () => {
  return (
    <>
    
    <Router>
   
      <div className="App">
      <Navbar />
      <Side />
    
        <Routes>
           <Route path='/table' element={<Tables/>}/>
           <Route path='/' element={<Profile/>}/> 
           <Route path="/log" element={<Login/>} />
           <Route path="/registration" element={<Registration />} />
         
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
