// src/pages/PartyMatching.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PartyMatching.css';

const PartyMatching = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: '', members: '' });

  useEffect(() => {
    axios.get('/api/parties').then(response => setThreads(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/parties', newThread).then(response => {
      setThreads([...threads, response.data]);
      setNewThread({ title: '', members: '' });
    });
  };

  return (
    <div className="parties-container">
      <h2>Create a Party</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newThread.title}
          onChange={handleInputChange}
          placeholder="Party Title"
          required
        />
        <input
          type="text"
          name="members"
          value={newThread.members}
          onChange={handleInputChange}
          placeholder="Number of Members"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Party Matching</h2>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <h3>{thread.title}</h3>
            <p>{thread.members} members</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyMatching;
