import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 px-6 place-items-center justify-center grid grid-rows-2">
     
      <div className="flex gap-4">
        <a href="/pages/contact" className="text-gray-400  hover:text-blue-400">
          Contact
        </a>
        <a href="/pages/about" className="text-gray-400  hover:text-blue-400">
          About
        </a>
        <a href="#" className="text-gray-400  hover:text-blue-400">
          Home
        </a>
        <a href="/pages/projects" className="text-gray-400 hover:text-blue-400">
          projects
        </a>
      </div>
      <div>
        <p className="text-m">Copyright © 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;