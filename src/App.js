import React from 'react';
import './App.css';
import './componentes/pagina_inicial/Cabecera';
import { Cabecera } from './componentes/pagina_inicial/Cabecera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-cabecera'>
          <Cabecera/>
        </div>
      </header>
    </div>
  );
}

export default App;
