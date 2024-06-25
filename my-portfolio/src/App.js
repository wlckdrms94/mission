import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Items from './pages/Items';
import Builds from './pages/Builds';
import PartyMatching from './pages/PartyMatching';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/party-matching" element={<PartyMatching />} />
      </Routes>
    </Router>
  );
};

export default App;
