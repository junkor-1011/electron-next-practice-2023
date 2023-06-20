'use client';

import React from 'react';
import styles from './page.module.css';

const InvokeButton: React.FC = () => {
  return (
    <button
      className={styles.card}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.electronAPI.invokeExample({
          message: 'invoke',
        })
        .then((res) => {
          alert(res);
        })
        .catch((err) => {
          alert(err);
        });
      }}
    >
      <h2>ipc invoke</h2>
    </button>
  );
}
export default InvokeButton;
