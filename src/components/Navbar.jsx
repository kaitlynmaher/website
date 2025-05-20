import React from 'react';

function Navbar() {
  return (
    <nav className="p-5 shadow-md fixed w-full bg-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kaitlyn Maher</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-blue-600">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
