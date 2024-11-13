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
    <div className="bg-[#E3F2FD] min-h-screen py-12 px-4">
      <main className="container mx-auto text-center">
        <p className="text-3xl font-bold mb-8 text-[#0A1D37]">
          Bienvenue sur notre bibliothèque virtuelle !
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0A1D37] mb-4">Livres</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A1D37]">{book.title}</h3>
                  <p className="text-[#1F2937]">Auteur : {book.author}</p>
                </div>
              ))
            ) : (
              <p className="text-[#1F2937]">Aucun livre disponible pour le moment.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0A1D37] mb-4">Auteurs</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {authors.length > 0 ? (
              authors.map((author) => (
                <div key={author.id} className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-[#1F2937]">{author.firstName} {author.lastName}</p>
                </div>
              ))
            ) : (
              <p className="text-[#1F2937]">Aucun auteur disponible pour le moment.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
