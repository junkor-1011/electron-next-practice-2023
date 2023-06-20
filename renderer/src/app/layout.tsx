import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
export default RootLayout;
