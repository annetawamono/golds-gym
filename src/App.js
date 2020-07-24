import React from 'react';
// import logo from './logo.svg';
import nav_logo from './images/nav-logo.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <nav className="nav">
          <img src={nav_logo} alt="Logo" />
          <ul className="nav__list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Workshops</li>
            <li>Promos</li>
            <li>Contact</li>
            <li className="nav__list--button">Join Now</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
