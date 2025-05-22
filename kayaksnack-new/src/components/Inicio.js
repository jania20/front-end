// src/components/Inicio.js
import React from 'react';
import './Inicio.css'; // Estilos específicos de la página de inicio

function Inicio() {
  return (
    <div className="mi-pagina-principal"> 
      <div className="seccion-bienvenida-kayak"> 
        <div className="texto-central-bienvenida">
          <h1>Kayak Snack</h1>
          <p>Justo lo que necesitas cuando el antojo llama</p>
          <p>Un espacio rodeado de naturaleza donde disfrutar de deliciosos snacks preparados con ingredientes frescos y el mejor sabor.</p>
          <div className="botones-principal"> 
            {/* Solo queda un botón: "Ver más" */}
            <a href="#" className="boton-explorar-snacks">Ver más &rarr;</a> 
          </div>
        </div>
        {/* Contenedor imagenesn */}
        <div className="contenedor-fotos-snacks"> 
          {/* Div rectángulo amarillo ddetras de las fotos */}
          <div className="fondo-decorativo-amarillo"></div> 
          {/* Imagen de la michelada (más grande) */}
          <img src="/images/russa.jpg" alt="Russa deliciosa" className="snack-principal-imagen" /> 
          {/* Imagen de la fruta (más pequeña, superpuesta) */}
          <img src="/images/frutas.jpeg" alt="Frescas frutas" className="snack-secundario-imagen" />
        </div>
      </div>

      {/*Modificar*/ }
      <div className="seccion-conocenos">
        <h2>Sobre nosotros</h2> 
        <p>Kayak Snack nació del corazón y los recuerdos. El nombre tiene una historia especial: años atrás, dos hermanos compartían la pasión por el canotaje (específicamente el kayak), un deporte acuático que practicaban en la Presa, no solo los conectó con el agua y la naturaleza, sino también entre ellos. De ahí nace el nombre: Kayak Snack, como símbolo de aventura, frescura y unión.</p>
        <br/>
        <p>El negocio comenzó frente a su casa, un lugar rodeado de árboles, vegetación y un río cercano. Un espacio tranquilo y natural, ideal para disfrutar de antojitos como los tostielotes, tosticeviche, tostitos preparados, fruta fresca , entre otros!</p>
      </div>
    </div>
  );
}

export default Inicio;