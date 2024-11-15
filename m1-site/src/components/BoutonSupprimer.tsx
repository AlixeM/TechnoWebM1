import React, { useState } from 'react';

interface DeleteButtonProps {
  onConfirm: () => void; // Fonction appelée lorsque l'utilisateur confirme la suppression
  itemName?: string; // Nom de l'élément à supprimer (optionnel pour affichage)
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onConfirm, itemName }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {/* Bouton principal pour ouvrir la modale */}
      <button
        onClick={openModal}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Supprimer
      </button>

      {/* Modale de confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confirmer la suppression</h2>
            <p className="text-gray-600 mb-6">
              Êtes-vous sûr de vouloir supprimer 
              {itemName ? ` "${itemName}"` : ' cet élément'} ? Cette action est irréversible.
            </p>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-5 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  onConfirm(); // Appelle la fonction de suppression
                  closeModal(); // Ferme la modale
                }}
                className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
