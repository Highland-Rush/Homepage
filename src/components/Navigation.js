import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/connect">Connect</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;