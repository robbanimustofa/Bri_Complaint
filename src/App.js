import React from 'react';
import './App.css'
import Footer from './component/Footer'
import background from './background.jpg'
// import ReplyForm from './page/spv/ReplyForm'
// import ReplyForm from './page/customer_service/ReplyForm'
import CsList from './page/spv/CsList'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
        <CsList />
        {/* <ReplyForm /> */}
        <Footer />
    </div>
  );
}

export default App;
