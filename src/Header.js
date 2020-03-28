import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-dark bg-dark">
        Josh Faison
        <nav>
          <span className="ml-5">
        <Link to="/">About</Link>
        </span>
        <span className="ml-5">
        <Link to="/Contact">Contact</Link>
        </span>
        <span className="ml-5">
        <Link to="/Portfolio">Portfolio</Link>
        </span>
      </nav>
      </nav>
    </div>
  );
}

export default Header;
