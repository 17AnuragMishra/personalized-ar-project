// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to the Future of Shopping</h1>
        <p className={styles.subtitle}>
          Experience immersive and personalized shopping like never before.
        </p>
        <Link to="/storefront" className={styles.ctaButton}>
          Explore Virtual Storefront
        </Link>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Virtual Try-On</h2>
          <p className={styles.featureDescription}>
            See how products look on you in real-time with our AR technology.
          </p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Personalized Recommendations</h2>
          <p className={styles.featureDescription}>
            Get tailored suggestions based on your preferences and style.
          </p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Seamless Shopping Experience</h2>
          <p className={styles.featureDescription}>
            Enjoy a smooth and intuitive interface that makes shopping a breeze.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
