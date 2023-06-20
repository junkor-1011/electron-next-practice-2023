'use client';

import React from 'react';
import styles from './page.module.css';

const SendButton: React.FC = () => {
  return (
    <button
      className={styles.card}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.electronAPI.sendExample('message from renderer: send');
      }}
    >
      <h2>ipc send</h2>
    </button>
  );
};
export default SendButton;
