import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section>
        <h2>Item Search</h2>
        <input type="text" placeholder="Search for items..." />
      </section>
      <section>
        <h2>Top 10 Popular Builds</h2>
        <ul>
          {/* 인기 빌드 리스트 */}
        </ul>
      </section>
      <section>
        <h2>Top 10 Party Matches</h2>
        <ul>
          {/* 파티 매칭 리스트 */}
        </ul>
      </section>
    </main>
  );
};

export default Home;
