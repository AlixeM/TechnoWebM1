import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css"; 


function App() {
  return (
    <div className="container">
      <h1 className="title">Library Book Management</h1>
      
      {/* Bouton pour ajouter un livre */}
      <button className="addButton">Add New Book</button>
      
      {/* Liste de livres (statique pour l'instant) */}
      <div className="bookList">
        <div className="bookCard">
          <h2>Book Title Example</h2>
          <p>by Author Name</p>
          <div className="buttonGroup">
            <button className="viewButton">View Details</button>
            <button className="editButton">Edit</button>
            <button className="deleteButton">Delete</button>
          </div>
        </div>
        {/* Autres livres pourraient être ajoutés ici de la même manière */}
      </div>
    </div>
  );
}

// Rendu du composant dans l'élément root
ReactDOM.render(<App />, document.getElementById("root"));
