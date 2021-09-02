import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  
  const [appUser, setAppUser] = useState('sonic_hedgehog')

  return (
    <div className="App">
      <Header />
      <Nav />
      <Content appUser={appUser} setAppUser={setAppUser}/>
      <Footer />
    </div>
  );
}

export default App;
