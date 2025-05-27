import React from 'react';
import './Ubicacion.css'; 

function Ubicacion() {
  return (
    <div className="seccion-ubicacion">
      <h1 className="titulo-seccion-ubicacion">Ubicación</h1>
      <hr className="linea-decorativa-gris" />

      <div className="contenido-ubicacion">
        {/* Columna izquierda: Información de contacto y horarios */}
        <div className="info-contacto-horarios">
          <div className="bloque-info">
            <h2>¿Dónde estamos ubicados?</h2>
            <p className="icono-texto">
              <span className="icon-placeholder">📍</span>
              Jardines de la Boca<br />
              Santiago, Nuevo León
            </p>
          </div>

          <div className="bloque-info">
            <h2>Horarios:</h2>
            <p className="icono-texto">
              <span className="icon-placeholder">🗓️</span>
              Viernes - Domingo<br />
              De 3:00 pm a 11:00 pm
            </p>
          </div>

          <div className="bloque-info">
            <h2>Contacto</h2>
            <p className="icono-texto">
              <span className="icon-placeholder">📞</span> 
              Cel: 0123456789
            </p>
            <p className="icono-texto">
              <span className="icon-placeholder">📧</span>
              Email: kayaksnack@gmail.com
            </p>
            <p className="icono-texto">
              <span className="icon-placeholder">🔵</span> 
              Facebook: kayak snack
            </p>
          </div>
        </div>

        {/* Columna derecha: Mapa y opciones de servicio */}
        <div className="mapa-servicios">
          <div className="caja-mapa">
            {/* Aquí puedes integrar un mapa de Google Maps u otro servicio */}
            <p>Aquí va el mapa</p>
            {/* Ejemplo de cómo podrías integrar un iframe de Google Maps: */}
            {/* <iframe
              src="URL_DE_EMBEBIDO_DE_Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Kayak Snack"
            ></iframe> */}
          </div>

          <div className="caja-opciones-servicio">
            <h2>Opciones de servicio</h2>
            <ul>
              <li>Para comer aquí</li>
              <li>Para llevar</li>
              <li>Servicio a domicilio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;