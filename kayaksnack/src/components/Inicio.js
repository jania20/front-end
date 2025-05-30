import React from 'react';
import './Inicio.css'; 

function Inicio() {

  // Función para el scroll suave 
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="mi-pagina-principal"> 
      <div className="seccion-bienvenida-kayak"> 
        <div className="texto-central-bienvenida">
          <h1>Kayak Snack</h1>
          <p>Justo lo que necesitas cuando el antojo llama</p>
          <p>Un espacio rodeado de naturaleza donde disfrutar de deliciosos snacks preparados con ingredientes frescos y el mejor sabor.</p>
          <div className="botones-principal"> 
            {/* El botón "Ver más" ahora desplaza a la sección "Sobre Nosotros" */}
            <button
              className="boton-explorar-snacks"
              onClick={() => handleScrollToSection('sobre-nosotros-seccion')} // Asegúrate que este ID coincida con el de App.js
            >
              Ver más &rarr;
            </button> 
          </div>
        </div>
        {/* Contenedor de imágenes */}
        <div className="contenedor-fotos-snacks"> 
          {/* Div rectángulo amarillo detrás de las fotos */}
          <div className="fondo-decorativo-amarillo"></div> 
          {/* Imagen de la michelada (más grande) */}
          <img src="/images/russa.jpg" alt="Russa deliciosa" className="snack-principal-imagen" /> 
          {/* Imagen de la fruta (más pequeña, superpuesta) */}
          <img src="/images/frutas.jpeg" alt="Frescas frutas" className="snack-secundario-imagen" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;