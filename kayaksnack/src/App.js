import React from 'react';

import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import Productos from './components/Productos';
import Ubicacion from './components/Ubicacion';
import RealizarPedido from './components/RealizarPedido';

import './App.css'; 

function App() {

  // Función para el scroll suave
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start' // Alinea el inicio de la sección en la parte superior de la vista
      });
    }
  };

  return (
    <div className="app-container">
      {/* HEADER */}
      <header>
        <div className="logo">Kayak Snack</div>
        <nav>
          <ul>
            <li><button onClick={() => handleScrollToSection('inicio-seccion')}>Inicio</button></li>
            <li><button onClick={() => handleScrollToSection('sobre-nosotros-seccion')}>Sobre Nosotros</button></li>
            <li><button onClick={() => handleScrollToSection('productos-seccion')}>Productos</button></li>
            <li><button onClick={() => handleScrollToSection('ubicacion-seccion')}>Ubicación</button></li>
            <li><button onClick={() => handleScrollToSection('realizar-pedido-seccion')}>Realizar Pedido</button></li>
          </ul>
        </nav>
      </header>

      {/* MAIN: Aquí se renderizarán todos los componentes secuencialmente */}
      <main>
        {/*
          Cada componente ahora está envuelto en un div con un ID para el scroll
          Y LE AÑADIMOS LA CLASE "seccion-pagina" que maneja la estructura general de la sección
        */}
        <div id="inicio-seccion" className="seccion-pagina">
          <Inicio />
        </div>

        <div id="sobre-nosotros-seccion" className="seccion-pagina">
          <SobreNosotros />
        </div>

        <div id="productos-seccion" className="seccion-pagina">
          <Productos />
        </div>

        <div id="ubicacion-seccion" className="seccion-pagina">
          <Ubicacion />
        </div>

        <div id="realizar-pedido-seccion" className="seccion-pagina">
          <RealizarPedido />
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Kayak Snack. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;