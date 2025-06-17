// Importation de StrictMode depuis React, utilisé pour activer des vérifications de développement
import React from "react";
// Importation de la méthode createRoot depuis react-dom/client pour initialiser et rendre l'application dans la racine du DOM
import ReactDOM from "react-dom/client";
// Importation du composant principal App à partir du fichier App.jsx
import App from "./App";
// Importation du fichier CSS personnalisé pour ajouter des styles spécifiques à l'application
import "./css/index.css";


// Créer un "root" React dans l'élément HTML avec l'id 'root' et y rendre l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  // Utilisation de StrictMode pour activer des vérifications en mode développement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
