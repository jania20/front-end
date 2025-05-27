import React from 'react';
import './InfoProductos.css';

function InfoProductos({ producto, onClose }) {
  if (!producto) {
    return null;
  }

  const renderDetalles = (nombreProducto) => {
    switch (nombreProducto) {
      case 'Russa':
        return (
          <>
            <h3>¡Prepara tu Russa Kayak Snack!</h3>
            <p>Una explosión de sabor que incluye:</p>
            <ul>
              <li>Chamoy en el vaso (por dentro)</li>
              <li>Tajín</li>
              <li>Cuadritos de piña y naranja</li>
              <li>Hielo triturado</li>
              <li>Una Squirt de 600ml</li>
              <li>2 o 3 limones</li>
              <li>Sal</li>
              <li>Más chamoy y Tajín</li>
              <li>Golosinas o gomitas <span className="opcional-tag">(opcional)</span></li>
              <li>Agua mineral <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">Puedes personalizar con o sin golosinas/gomitas y agua mineral.</p>
          </>
        );
      case 'Fruta':
        return (
          <>
            <h3>Tu Vaso de Fruta Fresca a tu gusto:</h3>
            <p>Elige tus frutas favoritas y añade los extras:</p>
            <ul>
              <li>**Frutas disponibles:** Piña, Sandía, Mango (elige las que más te gusten)</li>
              <li>Chamoy <span className="opcional-tag">(opcional)</span></li>
              <li>Tiko <span className="opcional-tag">(opcional)</span></li>
              <li>Gomitas <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">¡Combina tus frutas y añade tus complementos favoritos!</p>
          </>
        );
      case 'Tostielote':
        return (
          <>
            <h3>Tostielote: El sabor perfecto en cada bocado.</h3>
            <p>Deliciosos Tostitos con elote, y los aderezos que prefieras:</p>
            <ul>
              <li>Tostitos</li>
              <li>Elote</li>
              <li>Mayonesa <span className="opcional-tag">(opcional)</span></li>
              <li>Chile (en polvo o salsa) <span className="opcional-tag">(opcional)</span></li>
              <li>Crema <span className="opcional-tag">(opcional)</span></li>
              <li>Queso (cotija, cheddar, etc.) <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">¡Arma tu tostielote con tus ingredientes preferidos!</p>
          </>
        );
      case 'Elote en vaso':
        return (
          <>
            <h3>Elote en Vaso: Un clásico con tu toque personal.</h3>
            <p>Disfruta de nuestro cremoso elote en vaso, con opciones para añadir:</p>
            <ul>
              <li>Elote tierno</li>
              <li>Mayonesa <span className="opcional-tag">(opcional)</span></li>
              <li>Chile (en polvo o salsa) <span className="opcional-tag">(opcional)</span></li>
              <li>Crema <span className="opcional-tag">(opcional)</span></li>
              <li>Queso (cotija, cheddar, etc.) <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">Elige tus aderezos para un elote perfecto.</p>
          </>
        );
      case 'Tosticeviche':
        return (
          <>
            <h3>Tosticeviche: Frescura y sabor en cada Tostito.</h3>
            <p>Una base crujiente con nuestro delicioso ceviche y complementos:</p>
            <ul>
              <li>Tostitos</li>
              <li>Ceviche (de pescado o camarón, según disponibilidad)</li>
              <li>Limón extra <span className="opcional-tag">(opcional)</span></li>
              <li>Pepino</li>
              <li>Mini tostadas</li>
              <li>Mayonesa <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">Añade un toque extra de limón o mayonesa.</p>
          </>
        );
      case 'Boyas':
        return (
          <>
            <h3>Boyas: Nuestros deliciosos postres temáticos.</h3>
            <p>Inspirados en la aventura del kayak, prueba nuestros sabores:</p>
            <ul>
              <li>Boyas de Oreo</li>
              <li>Boyas de Pay de Limón</li>
              <li>Boyas de Gansito</li>
              <li>Boyas de Fresa</li>
              <li>Boyas de Mazapán</li>
              <li>Boyas de Dulce de Leche</li>
            </ul>
            <p className="nota-personalizacion">¡Una boya para cada antojo dulce!</p>
          </>
        );
      case 'Tostada':
        return (
          <>
            <h3>Tostada: La base perfecta para tu antojo.</h3>
            <p>Nuestras tostadas son crujientes y listas para combinar. Puedes elegir:</p>
            <ul>
              <li>Tostada simple (crujiente)</li>
              <li>Crema <span className="opcional-tag">(opcional)</span></li>
              <li>Queso <span className="opcional-tag">(opcional)</span></li>
              <li>Salsa <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">¡Ideal para acompañar o personalizar a tu gusto!</p>
          </>
        );
      case 'Chilidog':
        return (
          <>
            <h3>Chilidog: Un clásico irresistible.</h3>
            <p>El hot dog con el toque especial de Kayak Snack:</p>
            <ul>
              <li>1 Hot Dog</li>
              <li>Chili casero</li>
              <li>Queso <span className="opcional-tag">(opcional)</span></li>
              <li>Jalapeños <span className="opcional-tag">(opcional)</span></li>
            </ul>
            <p className="nota-personalizacion">¡Sabor y conveniencia en uno!</p>
          </>
        );
      case 'Litro Ceviche':
        return (
          <>
            <h3>Litro Ceviche: ¡Para compartir o para tu gran antojo!</h3>
            <p>Nuestro delicioso ceviche fresco en presentación de litro:</p>
            <ul>
              <li>1 Litro de Ceviche (pescado o camarón)</li>
              <li>Pepino</li>
              <li>Cebolla morada</li>
              <li>Cilantro</li>
              <li>Aguacate <span className="opcional-tag">(opcional)</span></li>
              <li>Acompañamientos: Tostadas y galletas saladas</li>
            </ul>
            <p className="nota-personalizacion">Perfecto para disfrutar en cualquier momento.</p>
          </>
        );
      default:
        return <p>Información no disponible para este producto.</p>;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2>{producto.nombre}</h2>
        <div className="modal-body">
          {renderDetalles(producto.nombre)}
        </div>
      </div>
    </div>
  );
}

export default InfoProductos;