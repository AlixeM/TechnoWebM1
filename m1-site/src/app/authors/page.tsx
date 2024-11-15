'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Author {
    id: number;
    name: string;
    biography: string;
    /*
    photoUrl: string;
    bookCount: number;
    averageRating: number;
    */
}

const Authors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newAuthor, setNewAuthor] = useState({ name: '', photoUrl: '', biography: '' });
    const [sortBy, setSortBy] = useState('');

    // Fonction pour récupérer les auteurs avec tri et recherche
    const fetchAuthors = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/authors`, {
                params: { search: searchQuery, sortBy },
            });
            setAuthors(response.data);
            setFilteredAuthors(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des auteurs:', error);
        }
    };

    useEffect(() => {
        fetchAuthors();
    }, [searchQuery, sortBy]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewAuthor(prevAuthor => ({ ...prevAuthor, [name]: value }));
    };

    const handleAddAuthor = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/authors', newAuthor);
        if (response.status === 201) {
            fetchAuthors(); // Actualiser la liste des auteurs
            closeModal();   // Fermer la modale
        } else {
            console.error("Erreur lors de l'ajout de l'auteur");
        }
    };

    return (
        <div className="p-10 bg-gradient-to-r from-green-200 to-blue-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-wide mb-8">Nos Auteurs</h1>

            {/* Filtres de tri */}
            <div className="flex justify-center gap-6 mb-8">
                <label className="text-lg text-gray-700">Trier par :</label>
                <select
                    onChange={handleSortChange}
                    value={sortBy}
                    className="bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                    <option value="">Aucun</option>
                    <option value="name">Nom</option>
                    <option value="bookCount">Nombre de livres</option>
                    <option value="averageRating">Moyenne des avis</option>
                </select>
            </div>

            {/* Barre de recherche */}
            <div className="flex items-center justify-center bg-white p-4 shadow-xl rounded-xl w-full max-w-lg mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Rechercher un auteur"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-3 px-5 text-gray-700 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={() => fetchAuthors()}
                    className="bg-blue-600 text-white py-3 px-6 ml-4 rounded-xl hover:bg-blue-700 focus:outline-none"
                >
                    Rechercher
                </button>
            </div>

            {/* Bouton pour ajouter un nouvel auteur */}
            <div className="flex justify-center mb-8">
                <button onClick={openModal} className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 focus:outline-none">
                    Ajouter un Auteur
                </button>
            </div>

            {/* Liste des auteurs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {filteredAuthors.map((author) => (
                    <div key={author.id} className="bg-white shadow-2xl rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
                        {/*<img src={author.photoUrl} alt={author.name} className="w-24 h-24 rounded-full mx-auto mb-4" />*/}
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">{author.name}</h2>
                        <p className="text-2xl font-semibold text-gray-800 text-center">Biography : {author.biography}</p>
                        {/*<p className="mt-2 text-gray-600 text-center">Livres écrits : {author.bookCount}</p>
                        <p className="mt-2 text-gray-600 text-center">Moyenne des avis : {author.averageRating.toFixed(1)}</p>*/}
                    </div>
                ))}
            </div>

            {/* Modale pour ajouter un auteur */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un Nouvel Auteur</h2>
                        <form onSubmit={handleAddAuthor}>
                            {/* Nom */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom :</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newAuthor.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* URL de la photo */}
                            <div className="mb-4">
                                <label className="block text-gray-700">URL de la Photo :</label>
                                <input
                                    type="url"
                                    name="photoUrl"
                                    value={newAuthor.photoUrl}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Biographie */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Biographie :</label>
                                <textarea
                                    name="biography"
                                    value={newAuthor.biography}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                    className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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

export default Authors;