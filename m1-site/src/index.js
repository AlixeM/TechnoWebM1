// index.js
import React from "react";
import ReactDOM from "react-dom";

// Composant simple qui peut être utilisé comme base pour une librairie
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component!</p>
    </div>
  );
}

// Rendu du composant dans l'élément root
ReactDOM.render(<App />, document.getElementById("root"));
