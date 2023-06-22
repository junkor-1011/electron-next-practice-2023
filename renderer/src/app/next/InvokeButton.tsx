'use client';

import React from 'react';

const InvokeButton: React.FC = () => {
  return (
    <button
      className="btn btn-secondary mx-4 rounded-full"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.electronAPI
          .invokeExample({
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
};
export default InvokeButton;
