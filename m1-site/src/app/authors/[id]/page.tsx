'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

interface Author {
  id: number;
  name: string;
  photoUrl: string;
  biography: string;
  bookCount: number;
  averageRating: number;
}

const AuthorDetailPage = () => {
  const { id } = useParams(); // Récupération de l'ID dynamique depuis l'URL
  const router = useRouter(); // Utilisation pour la navigation
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les détails d'un auteur
  const fetchAuthorDetails = async (authorId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/api/authors/${authorId}`);
      setAuthor(response.data); // Mise à jour des données
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError("Auteur introuvable."); // Erreur 404 spécifique
      } else {
        setError("Erreur lors de la récupération des détails de l'auteur."); // Autres erreurs
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAuthorDetails(id as string); // Appeler les détails de l'auteur
    }
  }, [id]);

  // Si chargement en cours
  if (loading) {
    return <div className="text-center text-gray-600">Chargement...</div>;
  }

  // Si une erreur s'est produite
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Si aucun auteur n'est trouvé (en cas de données nulles)
  if (!author) {
    return <div className="text-gray-600 text-center">Aucun détail disponible pour cet auteur.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-white to-teal-50 flex flex-col items-center p-10">
      {/* Titre de la page */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 mb-10">
        {author.name}
      </h1>

      {/* Photo et détails */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Photo de l'auteur */}
        <div className="flex-shrink-0">
          <img
            src={author.photoUrl}
            alt={`Photo de ${author.name}`}
            className="rounded-lg w-48 h-48 object-cover mx-auto md:mr-8"
          />
        </div>

        {/* Informations sur l'auteur */}
        <div className="flex flex-col mt-6 md:mt-0 space-y-4">
          <p className="text-lg text-gray-800">
            <strong>Biographie :</strong> {author.biography}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Nombre de livres :</strong> {author.bookCount}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Note moyenne :</strong> {author.averageRating.toFixed(1)} / 5
          </p>
        </div>
      </div>

      {/* Bouton pour retourner à la liste */}
      <button
        onClick={() => router.push('/authors')}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Retourner à la liste des auteurs
      </button>
    </div>
  );
};

export default AuthorDetailPage;