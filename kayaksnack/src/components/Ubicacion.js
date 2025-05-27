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
              Jardines Coloniales 105, Jardines de La Boca,<br />
              67323 Santiago, N.L., México
            </p>
          </div>

          <div className="bloque-info">
            <h2>Horarios:</h2>
            <p className="icono-texto">
              <span className="icon-placeholder">🗓️</span>
              Jueves - Domingo<br />
              De 4:00 pm a 10:00 pm
            </p>
          </div>

          <div className="bloque-info">
            <h2>Contacto</h2>
            <p className="icono-texto">
              <span className="icon-placeholder">📞</span>
              Cel: +52 81 3086 0806
            </p>
            <p className="icono-texto">
              <span className="icon-placeholder">📧</span>
              Email: kayaksnack@gmail.com 
            </p>
            <p className="icono-texto">
              <span className="icon-placeholder">🔵</span>
              Facebook: <a href="https://www.facebook.com/KAYAK-SNAKK-108127494289871" target="_blank" rel="noopener noreferrer">kayak snack</a>
            </p>
          </div>
        </div>

        {/* Columna derecha: Mapa y opciones de servicio */}
        <div className="mapa-servicios">
          <div className="caja-mapa">
            {/* Mapa de Google Maps*/}
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.020723821731!2d-100.12651472487401!3d25.73602167735399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662e086119f396b%3A0x6b30607b310e304f!2sJardines%20Coloniales%20105%2C%20Jardines%20de%20La%20Boca%2C%2067323%20Santiago%2C%20N.L.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1716787163820!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Kayak Snack en Google Maps"
              ></iframe>
            </div>
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