"use client";
import React, { useState, useEffect } from 'react';
import './App.css';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Exemple d'appel API pour obtenir les données des livres et auteurs
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4">
      <main className="container mx-auto text-center">
        <p className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Bienvenue sur notre bibliothèque virtuelle !
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Livres</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{book.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">Auteur : {book.author}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">Aucun livre disponible pour le moment.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Auteurs</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {authors.length > 0 ? (
              authors.map((author) => (
                <div key={author.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <p className="text-gray-900 dark:text-gray-100">{author.firstName} {author.lastName}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">Aucun auteur disponible pour le moment.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
