import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Accueil from './pages/acceuil/Accueil';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
