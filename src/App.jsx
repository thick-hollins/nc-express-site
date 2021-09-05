import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import Footer from './components/Footer';
import { AppUserContext } from './contexts'
import { useState } from 'react';

function App() {
  const [appUser, setAppUser] = useState('sonic_hedgehog')

  return (
    <AppUserContext.Provider value={appUser, setAppUser}>
      <div className="App">
        <Header />
        <Nav />
        <Content />
        <Footer />
      </div>
    </AppUserContext.Provider>
  );
}

export default App;
