'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import DeleteButton from '../../../components/BoutonSupprimer';

interface Author {
  id: number;
  name: string;
  biography: string;
  /*
  publicationDate: string;
  author: string;
  price?: number;
  */
}

const AuthorDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchAuthorDetails(id as string);
    }
  }, [id]);

  const fetchAuthorDetails = async (authorId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/authors/${authorId}`);
      setAuthor(response.data);
    } /*catch (err) {
      setError("Erreur lors de la récupération des détails du livre.");
    }*/ finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (id) {
      try {
        await axios.delete(`http://localhost:3001/authors/${id}`);
        router.push('/authors');
      } catch (error) {
        setError("Erreur lors de la suppression du livre.");
      }
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-teal-100 via-white to-teal-50">
      {/* Titre du livre mis en avant */}
      <div className="w-full py-10">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500">
          {author?.name || 'Auteur'}
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-6 mb-12 space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg text-gray-600">Nom : {author?.name}</h2>
          <p className="text-lg text-gray-600">Biography : {author?.biography}</p>
          {/*
          <h2 className="text-lg text-gray-600">Auteur : {author?.author}</h2>
          <p className="text-lg text-gray-600">Date de publication : {author?.publicationDate}</p>
          <p className="text-lg text-gray-600">Prix : {author?.price ? `${author?.price} €` : 'Non disponible'}</p>
            */}
          </div>

        {/* Bouton de suppression */}
        <div className="text-center">
          <DeleteButton onConfirm={handleDelete} itemName={author?.name} />
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;