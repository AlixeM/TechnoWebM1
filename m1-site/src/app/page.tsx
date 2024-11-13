"use client";
import React, { useState, useEffect } from 'react';
import './App.css';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="homepage">
      <main className="content">
        <p className="welcome-text">Bienvenue sur notre bibliothèque virtuelle !</p>

        <section className="books-section">
          <h2 className="section-title">Livres</h2>
          {books.length > 0 ? (
            <ul className="book-list">
              {books.map((book) => (
                <li key={book.id} className="book-item">
                  <h3>{book.title}</h3>
                  <p>Auteur : {book.author}</p>
                  <p>Note : {book.rating} / 5</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun livre disponible pour le moment.</p>
          )}
        </section>

        <section className="authors-section">
          <h2 className="section-title">Auteurs</h2>
          {authors.length > 0 ? (
            <ul className="author-list">
              {authors.map((author) => (
                <li key={author.id} className="author-item">
                  <p>{author.firstName} {author.lastName}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun auteur disponible pour le moment.</p>
          )}
        </section>
      </main>
    </div>
  );
}
