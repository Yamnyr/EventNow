import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/acceuil/accueil'; // Assure-toi que le chemin et le nom du fichier sont corrects
import Profil from './pages/profil/profil';
import Evenement from './pages/evenement/evenement'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/evenement" element={<Evenement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
