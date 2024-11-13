import React from 'react';

export default function Navbar() {
  return (
    <nav className="space-x-8 text-lg text-center">
      <a href="/" className="hover:text-yellow-300 transition-colors">Home</a>
      <a href="/books" className="hover:text-yellow-300 transition-colors">Books</a>
      <a href="/authors" className="hover:text-yellow-300 transition-colors">Authors</a>
    </nav>
  );
}
