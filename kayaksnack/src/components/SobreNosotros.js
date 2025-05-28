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
          {/* Asegúrate de que la ruta de la imagen sea correcta */}
          <img src="./images/foto.jpeg" alt="Imagen de Kayak Snack" /> 
        </div>

        {/* Contenedor del texto de la historia */}
        <div className="texto-historia">
          <h3>Nuestra Historia</h3>
          <p>
            Kayak Snack nació del corazón y los recuerdos. El nombre tiene una historia especial: años atrás, dos hermanos compartían la pasión por el canotaje (específicamente el kayak), un deporte acuático que practicaban en la Presa.
          </p>
          <p>
            No solo los conectó con el agua y la naturaleza, sino también entre ellos. De ahí nace el nombre: Kayak Snack, como símbolo de aventura, frescura y unión.
          </p>
          <p>
            El negocio comenzó frente a su casa, un lugar rodeado de árboles, vegetación y en un entorno tranquilo y natural. Ideal para disfrutar de antojitos como tostielotes, tostilocos, fruta fresca, entre otros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;