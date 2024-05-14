import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/acceuil/accueil';
import Inscription from './pages/inscription/inscription';

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
<<<<<<< HEAD
          <Route path="/inscription" element={<Inscription />} />
=======
<<<<<<< HEAD
          <Route path="/newevenement" element={<NewEvenement />} />
=======

>>>>>>> 41d11ea202d7f80b842bf08027484c27ff98dfd9
>>>>>>> 106da9138c24f8aa3c78e13ed2a82c8fd9ab9848
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
