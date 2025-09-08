import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ncvColor-blue text-white py-4 w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Paws & Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
