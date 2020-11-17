import './App.css';
import SignupCustomer from './page/signupCustomer';
import AddCSAccount from './page/addCSAccount';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>BRI Complaint</h1>
      </div>
      <div className="content">
        <SignupCustomer />
        {/* <AddCSAccount /> */}
      </div>
    </div>
  );
}

export default App;
