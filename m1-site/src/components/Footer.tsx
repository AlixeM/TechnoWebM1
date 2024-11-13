import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2024 MyLibrary. Tous droits réservés.</p>
        <div className="mt-4">
          <a className="text-yellow-300 hover:underline mx-2">Mentions légales</a>
          <a className="text-yellow-300 hover:underline mx-2">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
