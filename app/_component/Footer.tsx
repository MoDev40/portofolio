'use client'
import React from 'react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Mukhtaar Ahmed Maxamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;