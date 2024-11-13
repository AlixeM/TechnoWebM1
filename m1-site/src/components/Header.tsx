import React from 'react';
import Navbar from './Navbar'; // Assurez-vous que Navbar est bien importé

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-12">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="text-4xl font-bold tracking-wider mb-6">
          <span className="text-white">My</span>
          <span className="text-yellow-300">Library</span>
        </div>


        <Navbar />
      </div>
    </header>
  );
}
