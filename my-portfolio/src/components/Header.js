import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/items">Items</a></li>
          <li><a href="/builds">Builds</a></li>
          <li><a href="/party-matching">Party Matching</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
