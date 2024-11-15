"use client";
import React from 'react';
import './App.css';

export default function HomePage() {
  return (
    <div className="bg-[#E3F2FD] min-h-screen py-12 px-4">
      <main className="container mx-auto text-center">
        <p className="text-3xl font-bold mb-2 text-[#0A1D37]">
          Bienvenue sur notre bibliothèque virtuelle !
        </p>

        {/* Section des actualités de la bibliothèque */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center">
            <LibraryNewsSection />
          </div>
        </section>
      </main>
    </div>
  );
}

// Section des actualités de la bibliothèque
function LibraryNewsSection() {
  const news = [
    {
      id: 1,
      title: "Nouvelle Collection Automne 2024",
      description: "Découvrez notre nouvelle collection de romans et de livres de science pour cet automne !",
      date: "1 Novembre 2024",
      imageUrl: "/uploads/image1.jpg"
    },
    {
      id: 2,
      title: "Atelier d'écriture créative",
      description: "Participez à notre atelier d'écriture avec l'écrivain invité Marie Dubois le 15 Novembre.",
      date: "15 Novembre 2024",
      imageUrl: "/uploads/image2.jpg"
    },
    {
      id: 3,
      title: "Exposition des Livres Rares",
      description: "Découvrez des livres rares de notre collection historique lors d'une exposition spéciale.",
      date: "20 Novembre 2024",
      imageUrl: "/uploads/image3.jpg"
    },
    {
      id: 4,
      title: "Soirée Cinéma-Livre : Adaptations Littéraires",
      description: "Rejoignez-nous pour une soirée spéciale où nous explorerons des adaptations cinématographiques de grands classiques.",
      date: "25 Novembre 2024",
      imageUrl: "/uploads/image4.jpg"
    },
    {
      id: 5,
      title: "Rencontre avec un Auteur Mystère",
      description: "Une session exclusive de questions-réponses avec un auteur mystère très attendu. Réservez votre place !",
      date: "30 Novembre 2024",
      imageUrl: "/uploads/image5.jpg"
    },
    {
      id: 6,
      title: "Club de Lecture : Découverte de Nouveaux Genres",
      description: "Participez à notre club de lecture où nous explorerons des genres émergents et peu connus.",
      date: "5 Décembre 2024",
      imageUrl: "/uploads/image6.jpg"
    }
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-[#0A1D37] mb-8">Nouvelles de la Bibliothèque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={item.imageUrl} alt={item.title} className="rounded-md mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold text-[#0A1D37] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500 mt-2">Date : {item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}