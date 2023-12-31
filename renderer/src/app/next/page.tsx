import React from 'react';
import SendButton from './SendButton';
import InvokeButton from './InvokeButton';
import styles from './page.module.css';
import { exampleStyle } from './style.css';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h2 className={exampleStyle}>return to home</h2>
        </a>
        <SendButton />
        <InvokeButton />
      </div>
    </main>
  );
};
export default Home;
