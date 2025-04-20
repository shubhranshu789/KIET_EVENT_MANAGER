import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => {navigate('/')}}>MyLogo</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
      
        {/* <p onClick={() => {navigate('/innotech')}}> Add Event</p>
        <p onClick={() => {navigate('/allevents')}}> All Events</p> */}
        <p onClick={() => {navigate('/profile')}}> Profile</p>
        <p onClick={() => {navigate('/eventsection')}}> Live Events</p>
        <p onClick={() => {logout()}}> LogOut</p>
       
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
