import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import Accueil from './pages/acceuil/accueil';
import Inscription from './pages/inscription/inscription';

=======
import Accueil from './pages/acceuil/Accueil'; // Assure-toi que le chemin et le nom du fichier sont corrects
>>>>>>> 592edb6232739e32d8db77d35f7430072c04799d
import Profil from './pages/profil/profil';
import Evenement from './pages/evenement/evenement'
import NewEvenement from './pages/admin/newEvenement'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/newevenement" element={<NewEvenement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
