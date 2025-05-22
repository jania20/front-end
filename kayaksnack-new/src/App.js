import React from 'react';
import Inicio from './components/Inicio'; // Importa el componente Inicio
import './App.css'; // Asegúrate de que tienes este archivo

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo">Kayak Snack</div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
          </ul>
        </nav>
      </header>
      <main>
         {/*para renderizar el comp iniciio here*/}
        <Inicio />
      </main>
      <footer>
        <p>© 2025 Kayak Snack. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;