import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importation des composants partagés
import Header from './components/Header'; // Barre de navigation
import Footer from './components/Footer'; // Pied de page

// Importation des pages
import Home from './pages/Home'; // Page d'accueil
import Services from './pages/Services'; // Page Services
import Realisations from './pages/Realisations'; // Page Réalisations
import Blog from './pages/Blog'; // Page Blog
import Contact from './pages/Contact'; // Page Contact
import Legal from './pages/MentionLegales'; // Page Mentions Légales
import ApiGitHub from './pages/ApiGitHub'; // Page Profil

// Composant principal de l'application
const App = () => {
  return (
    // Enveloppe l'application dans un Router pour gérer les routes
    <Router basename="/optimisez-votre-cv-en-ligne-avec-react.js/">
      {/* Header : présent sur toutes les pages */}
      <Header />

      {/* Système de gestion des routes */}
      <Routes>
        {/* Déclare les différentes routes */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/services" element={<Services />} /> {/* Route pour la page Services */}
        <Route path="/realisations" element={<Realisations />} /> {/* Route pour la page Réalisations */}
        <Route path="/blog" element={<Blog />} /> {/* Route pour la page Blog */}
        <Route path="/contact" element={<Contact />} /> {/* Route pour la page Contact */}
        <Route path="/mentions-legales" element={<Legal />} /> {/* Route pour la page Mentions Légales */}
        <Route path="/profil" element={<ApiGitHub />} /> {/* Route pour la page Profil */}
      </Routes>

      {/* Footer : présent sur toutes les pages */}
      <Footer />
    </Router>
  );
};
// Exportation du composant principal
export default App;