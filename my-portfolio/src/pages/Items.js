// src/pages/Items.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items').then(response => setItems(response.data));
  }, []);

  return (
    <div className="items-container">
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Crafting Recipe: {item.recipe}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
