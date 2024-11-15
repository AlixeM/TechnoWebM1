'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Book {
    id: number;
    title: string;
    publicationDate: string;
    price: string;
    /*
    description: string;
    author: string;
    */
}

const Books = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newBook, setNewBook] = useState({ title: '', description: '', publicationDate: '', price: '0' });
    const [sortBy, setSortBy] = useState('');

    // Fonction pour récupérer les livres avec les paramètres de tri et de recherche
    const fetchBooks = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/books`, {
                params: {
                    search: searchQuery,
                    sortBy,
                },
            });
            setBooks(response.data);
            setFilteredBooks(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des livres:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [searchQuery, sortBy]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewBook(prevBook => ({ ...prevBook, [name]: value }));
    };

    const handleAddBook = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook),
        });
        if (response.ok) {
            fetchBooks(); // Actualiser la liste des livres
            closeModal(); // Fermer la modale après ajout
        } else {
            console.error("Erreur lors de l'ajout du livre");
        }
    };

    return (
        <div className="p-10 bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-wide mb-8">Nos Livres</h1>

            {/* Filtres de tri */}
            <div className="flex justify-center gap-6 mb-8">
                <label className="text-lg text-gray-700">Trier par :</label>
                <select
                    onChange={handleSortChange}
                    value={sortBy}
                    className="bg-transparent border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
                >
                    <option value="">Aucun</option>
                    <option value="title">Titre</option>
                    <option value="publicationDate">Date</option>
                    <option value="author">Auteur</option>
                    <option value="price">Prix</option>
                </select>
            </div>

            {/* Barre de recherche */}
            <div className="flex items-center justify-center bg-white p-4 shadow-xl rounded-xl w-full max-w-lg mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Chercher un livre"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-3 px-5 text-gray-700 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={() => fetchBooks()}
                    className="bg-purple-600 text-white py-3 px-6 ml-4 rounded-xl hover:bg-purple-700 focus:outline-none"
                >
                    Rechercher
                </button>
            </div>

            {/* Bouton pour ajouter un nouveau livre */}
            <div className="flex justify-center mb-8">
                <button onClick={openModal} className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 focus:outline-none">
                    Ajouter un Livre
                </button>
            </div>

            {/* Liste des livres */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="bg-white shadow-2xl rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800">{book.title}</h2>
                        <p className="mt-2 text-gray-600">Publié le: {book.publicationDate}</p>
                        <p className="mt-2 text-gray-600">Prix: {book.price} €</p>
                        {/*
                        <p className="mt-2 text-gray-600">Description: {book.description}</p>
                        <p className="mt-2 text-gray-600">Auteur: {book.author}</p>
                        */}
                        <a
                            href={`/books/${book.id}`}
                            className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-semibold"
                        >
                            Voir Détails
                        </a>
                    </div>
                ))}
            </div>

            {/* Modale pour ajouter un livre */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un Nouveau Livre</h2>
                        <form onSubmit={handleAddBook}>
                            {/* Titre */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Titre :</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newBook.title}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Description :</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={newBook.description}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            
                            {/* Auteur 
                            <div className="mb-4">
                                <label className="block text-gray-700">Auteur :</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={newBook.author}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>  */}
                                
                            {/* Prix */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Prix :</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={newBook.price}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>  

                            {/* Date de publication*/}
                            <div className="mb-4">
                                <label className="block text-gray-700">Date de publication :</label>
                                <input
                                    type="text"
                                    name="publicationDate"
                                    value={newBook.publicationDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>  
                            

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-5 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Books;