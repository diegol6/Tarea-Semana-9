import React from 'react';
import './Styles.css';
import {Equipos} from "./components/Equipos";


function App() {
  return (
    <div className="App">
      <header className="flexContainerPrincipal">
        <h1 className='fon'>Premier League</h1>
      <Equipos/>
      </header>
    </div>
  );
}

export default App;
