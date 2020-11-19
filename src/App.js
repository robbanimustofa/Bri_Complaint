import React from 'react';
import './App.css';
import Footer from './component/Footer';
import TicketListCs from './page/customer/TicketListCs';

function App() {
  return (
    <div className="App">
        <TicketListCs />
        <Footer />
    </div>
  );
}

export default App;
