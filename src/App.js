import React from 'react';
import './App.css';
import Navbar from './page/customer/Navbar';
import Footer from './component/Footer';
import TicketListCs from './page/customer/TicketListCs';

function App() {
  return (
    <div className="App">
        <Navbar />
        <TicketListCs />
        <Footer />
    </div>
  );
}

export default App;
