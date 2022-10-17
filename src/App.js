import React from 'react';
import './App.css';
import './componentes/pagina_inicial/Cabecera';
import { Cabecera } from './componentes/pagina_inicial/Cabecera';
import { Mensaje } from './componentes/pagina_inicial/Mensaje';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-cabecera'>
          <Cabecera/>
          <Mensaje texto="uriel estuvo aqui"/> 
        </div>
      </header>
    </div>
  );
}

export default App;
