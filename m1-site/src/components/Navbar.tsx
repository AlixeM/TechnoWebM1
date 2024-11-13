import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white py-6 px-8 w-full">
      <div className="container mx-auto flex justify-center space-x-10">
        
        <a
          href="/"
          className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 hover:text-yellow-200 transition-all transform hover:scale-105 hover:shadow-md"
        >
          Home
        </a>
        <a
          href="/books"
          className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 hover:text-yellow-200 transition-all transform hover:scale-105 hover:shadow-md"
        >
          Books
        </a>
        <a
          href="/authors"
          className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 hover:text-yellow-200 transition-all transform hover:scale-105 hover:shadow-md"
        >
          Authors
        </a>
      </div>
    </nav>
  );
}
