import React from 'react';
import './App.css';
import Footer from './component/Footer';
import DashboardCustomer from './page/customer/DashboardCustomer';
import background from './background.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
        <DashboardCustomer />
        <Footer />
    </div>
  );
}

export default App;
