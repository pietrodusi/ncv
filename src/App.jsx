import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contatti from './components/Contatti';
import Servizi from './components/Servizi';
import ChiSiamo from './components/ChiSiamo';

export default function App() {

  const [page, setPage] = useState('Home');

  function handleClick(e) {
    setPage(e.currentTarget.name)
  }

  function showPage() {
    switch (page) {
      case 'Home':
        return <Home page={page} setPage={setPage} handleClick={handleClick} />;
      case 'ChiSiamo':
        return <ChiSiamo />;
      case 'Contatti':
        return <Contatti />;
      case 'Servizi':
        return <Servizi />
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <Header page={page} setPage={setPage} handleClick={handleClick} />
        {showPage()}
      <Footer />
    </div>
  );
}
