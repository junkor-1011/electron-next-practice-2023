'use client';

import React from 'react';

const SendButton: React.FC = () => {
  return (
    <button
      className="btn btn-primary mx-4 rounded-full"
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
