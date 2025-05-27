import React from 'react';
import './SobreNosotros.css'; 

function SobreNosotros() {
  return (
    // Usa la className principal de la sección
    <section className="seccion-sobre-nosotros" id="sobre-nosotros">
      {/* Título de la sección */}
      <h2>Sobre Nosotros</h2>
      {/* Contenedor principal del contenido (imagen y texto) */}
      <div className="contenedor-contenido-sobre-nosotros">
        {/* Contenedor de la imagen */}
        <div className="imagen-sobre-nosotros">
          <img src="./images/foto.jpeg" alt="Imagen de Kayak Snack" />
          
        </div>

        {/* Contenedor del texto de la historia */}
        <div className="texto-historia">
          <h3>Nuestra Historia</h3>
          <p>Kayak Snack nació de la pasión por crear experiencias culinarias únicas, frescas y llenas de sabor. Ubicados en un entorno natural vibrante, nos esforzamos por ser el oasis perfecto donde la buena comida y la tranquilidad se encuentran.</p>
          <p>Cada snack es preparado con ingredientes de la más alta calidad, pensando en tu disfrute y bienestar.</p>
          <p>Desde los clásicos elotes en vaso hasta nuestras innovadoras micheladas y frutas frescas, en Kayak Snack encontrarás el compañero ideal para tus aventuras o simplemente para ese momento de antojo.</p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;