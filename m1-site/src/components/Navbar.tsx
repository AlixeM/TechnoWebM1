import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-4 px-8 w-full">
      <div className="container mx-auto flex justify-center space-x-8">
        
        <a
          href="/"
          className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-yellow-300"
        >
          Home
        </a>
        <a
          href="/books"
          className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-yellow-300"
        >
          Books
        </a>
        <a
          href="/authors"
          className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-yellow-300"
        >
          Authors
        </a>
      </div>
    </nav>
  );
}
