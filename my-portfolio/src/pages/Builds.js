// src/pages/Builds.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Builds.css';

const Builds = () => {
  const [builds, setBuilds] = useState([]);
  const [newBuild, setNewBuild] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('/api/builds').then(response => setBuilds(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBuild({ ...newBuild, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/builds', newBuild).then(response => {
      setBuilds([...builds, response.data]);
      setNewBuild({ name: '', description: '' });
    });
  };

  return (
    <div className="builds-container">
      <h2>Create a Build</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newBuild.name}
          onChange={handleInputChange}
          placeholder="Build Name"
          required
        />
        <textarea
          name="description"
          value={newBuild.description}
          onChange={handleInputChange}
          placeholder="Build Description"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Builds</h2>
      <ul>
        {builds.map(build => (
          <li key={build.id}>
            <h3>{build.name}</h3>
            <p>{build.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Builds;
