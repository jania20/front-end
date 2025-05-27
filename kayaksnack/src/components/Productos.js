import React, { useState } from 'react';
import './Productos.css';
import InfoProductos from './InfoProductos';

function Productos() {
  const allProducts = [
    { name: 'Russa', image: '/images/russa.jpg', class: '' },
    { name: 'Fruta', image: '/images/frutas.jpeg', class: '' },
    { name: 'Elote en vaso', image: '/images/elote.jpeg', class: 'elote-imagen' },
    { name: 'Tosticeviche', image: '/images/tosticeviche.jpeg', class: 'tosticeviche-imagen' },
    { name: 'Tostielote', image: '/images/tostielote.jpeg', class: 'tostielote-imagen' },
    { name: 'Boyas', image: '/images/boyas.jpeg', class: 'boyas-imagen' },

    // Estos productos se desplegarán al hacer clic en "Ver más"
    { name: 'Tostada', image: '/images/tostada.jpeg', class: 'tostada-imagen' },
    { name: 'Litro Ceviche', image: '/images/litroceviche.jpeg', class: 'litroceviche-imagen' },
    { name: 'Chilidog', image: '/images/chilidog.jpeg', class: 'chilidog-imagen' },
  ];

  // Estado para controlar cuántos productos se muestran inicialmente
  const productosIniciales = 6; 
  const [productosMostrados, setProductosMostrados] = useState(productosIniciales);

  // Estado para controlar qué producto se muestra en el modal (null si ninguno)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el modal con la información del producto
  const handleCardClick = (productName) => {
    setSelectedProduct({ nombre: productName });
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Función para alternar entre "Ver más" y "Ver menos"
  const handleToggleProductos = () => {
    if (productosMostrados < allProducts.length) {
      // Si no se están mostrando todos, muestra todos los restantes
      setProductosMostrados(allProducts.length);
    } else {
      // Si se están mostrando todos, vuelve a mostrar solo los iniciales
      setProductosMostrados(productosIniciales);
    }
  };

  const textoBoton = productosMostrados < allProducts.length ? 'Ver más \u2192' : 'Ver menos \u2190';
  const mostrarBoton = allProducts.length > productosIniciales; // Solo muestra el botón si hay más productos que los iniciales

  return (
    <div className="seccion-productos">
      <h1 className="titulo-seccion-productos">Nuestros Productos</h1>
      <hr className="linea-decorativa-amarilla" />

      <div className="galeria-productos">
        {allProducts.slice(0, productosMostrados).map((product) => (
          <div
            className="tarjeta-producto"
            key={product.name}
            onClick={() => handleCardClick(product.name)}
          >
            <img
              src={product.image}
              alt={product.name + " Kayak Snack"}
              className={`imagen-producto ${product.class}`}
            />
            <h3 className="nombre-producto">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Solo muestra el botón si hay más productos que los iniciales */}
      {mostrarBoton && (
        <div className="contenedor-boton-productos">
          <button onClick={handleToggleProductos} className="boton-explorar-productos">
            {textoBoton}
          </button>
        </div>
      )}

      {/* Renderiza el modal si hay un producto seleccionado */}
      <InfoProductos producto={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default Productos;