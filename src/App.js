import React from 'react';
import './App.css';
import Footer from './component/Footer';
import TicketListCs from './page/customer/TicketListCs';
import background from './background.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
        <TicketListCs />
        <Footer />
    </div>
  );
}

export default App;
