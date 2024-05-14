import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/acceuil/Accueil'; // Assure-toi que le chemin et le nom du fichier sont corrects

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
