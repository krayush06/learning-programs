import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <CalculateScore name="Alice" school="Springfield High" total={450} goal={5} />
    </div>
  );
}

export default App;
