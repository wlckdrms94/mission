import React from 'react';
import styles from './PortfolioItem.module.css'; // CSS 모듈 임포트

const PortfolioItem = ({ title, description, image }) => {
  return (
    <div className={styles.portfolioItem}>
      <img src={image} alt={title} className={styles.portfolioImage} />
      <h2 className={styles.portfolioTitle}>{title}</h2>
      <p className={styles.portfolioDescription}>{description}</p>
    </div>
  );
};

export default PortfolioItem;
