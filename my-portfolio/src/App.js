import React from 'react';
import Header from './components/Header';
import PortfolioItem from './components/PortfolioItem';

const App = () => {
  return (
    <div>
      <Header />
      <PortfolioItem 
        title="Project 1"
        description="This is my first project."
        image="path/to/image1.jpg"
      />
      <PortfolioItem 
        title="Project 2"
        description="This is my second project."
        image="path/to/image2.jpg"
      />
    </div>
  );
};

export default App;
