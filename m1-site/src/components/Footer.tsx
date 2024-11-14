import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white py-12 mt-0">
      <div className="container mx-auto text-center">
        {/* Texte de copyright */}
        <p className="text-lg font-medium mb-6">
          © 2024 <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Book Haven</span>. Tous droits réservés.
        </p>

        {/* Liens du footer */}
        <div className="mt-4 flex justify-center gap-8">
          <a className="text-yellow-300 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
            Mentions légales
          </a>
          <a className="text-yellow-300 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
            Politique de confidentialité
          </a>
        </div>

        {/* Ligne de séparation avec effet */}
        <div className="mt-8 border-t-2 border-white opacity-40 w-1/2 mx-auto"></div>
        
      </div>
    </footer>
  );
};

export default Footer;
