import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white py-6">
      <div className="container mx-auto flex flex-col justify-center">
        {/* Logo aligné à gauche avec marge */}
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-4 ml-8">
          <span>Book</span>
          <span className="ml-2">Haven</span>
        </div>

        {/* Slogan centré */}
        <p className="text-base font-medium text-gray-200 mb-4 text-center mx-auto">
          Votre destination ultime pour la lecture et l'inspiration
        </p>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}