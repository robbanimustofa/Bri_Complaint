import React from 'react'
import './App.css'
import Footer from './component/Footer'
import InitTicket from './page/customer/InitTicket'
import background from './background.jpg'

function App() {
  return (
    <div className="App background" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover"}}>
        <InitTicket />
        <Footer />
    </div>
  );
}

export default App;
