import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './pages/Feed';

function App() {
  //pull the ig-backend photos from localhost:5001
  useEffect( () => {}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Feed /> 
      </header>
    </div>
  );
}

export default App;
