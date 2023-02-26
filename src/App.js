import './App.css';
import { useState } from 'react';
import DashboardPage from './Components/Dashboard/DashboardPage';
import LoginPage from './Components/LoginPage';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <h1 className='mt-4'>RCCTechz Dashboard</h1>

      {authenticated ? <DashboardPage authentic={setAuthenticated}/> : <LoginPage authentic={setAuthenticated}/>}
      
    </div>
  );
}

export default App;
