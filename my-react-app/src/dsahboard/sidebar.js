import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './navbar';
import { FaEllipsisV } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'
import Tables from './table';
const Side = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
   
  const handleIconClick = () => {
    toggleSidebar(); // Toggle the sidebar state when the icon is clicked
  };
const handelClose=()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="side">
     
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className={` ${isSidebarOpen ? 'ico' : ''}`}  onClick={handleIconClick}>
            <FaEllipsisV /> {/* Three dots icon */}
          </div>
           {
             isSidebarOpen  &&
            <div  className='icons'>
            
           <ul className="sidebar_list" >
            <li className="sidebar_li">
              <Link to="/log">Login</Link>
            </li>
            <li className="sidebar_li">
              <Link to="/registration">Registration</Link>
            </li>
            <li className="sidebar_li">
              <Link to="/">Profile</Link>
            </li>
            <li className="sidebar_li">
              <Link to="/table">Tables</Link>
            </li>
            {/* Add more sidebar links here */}
          </ul>
           <div className='ico_class'>
               <FontAwesomeIcon icon={faTimes}  onClick={handelClose}/>
            </div>
          </div>}
        </div>
        {/* Add Route components for your pages here */}
    
    </div>
  );
};

export default Side;
