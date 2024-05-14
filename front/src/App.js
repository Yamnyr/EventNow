import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/acceuil/Accueil';

function App() {
  return (
    <div>
      <div className="my-4 pt-4 container-fluid">
        <Header />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      <div className="col p-0 bg-color-blue-in">

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
