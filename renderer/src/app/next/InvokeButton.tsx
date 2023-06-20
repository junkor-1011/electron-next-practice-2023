'use client';

import React from 'react';
import styles from './page.module.css';

export default function InvokeButton(): React.ReactNode {
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
