import React from 'react';
import './PedidoConfirmacion.css';

function PedidoConfirmacion({ pedido, onClose, onPedirMas, onCancelar, onTerminarPedido }) {
  if (!pedido) return null;

  const tieneIngredientes = pedido.ingredientes && pedido.ingredientes.length > 0;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-contenido" onClick={e => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose}>&times;</button>
        <h2>Tu Pedido:</h2>
        <div className="pedido-detalle">
          <img src={pedido.imagen} alt={pedido.antojo} className="pedido-imagen" />
          <div className="pedido-info-texto">
            <h3>{pedido.antojo}</h3>
            {tieneIngredientes ? (
              <p>
                **Ingredientes adicionales:**
                <ul className="lista-ingredientes-modal">
                  {pedido.ingredientes.map((ing, index) => (
                    <li key={index}>- {ing}</li>
                  ))}
                </ul>
              </p>
            ) : (
              <p>Sin ingredientes adicionales.</p>
            )}
            <p>
              **Tipo de Servicio:** {pedido.tipoServicio === 'recoger' ? 'Recoger en tienda' : 'Envío a Domicilio'}
            </p>
            {pedido.tipoServicio === 'domicilio' && (
              <p>
                **Dirección:** {pedido.direccionEnvio}
              </p>
            )}
            {/*Tiempo Estimado */}
            {pedido.tiempoEstimado && (
              <p>
                **Tiempo estimado:** {pedido.tiempoEstimado}
              </p>
            )}
          </div>
        </div>
        <p className="mensaje-confirmacion">¿Deseas confirmar este pedido o añadir más productos?</p>

        <div className="modal-acciones">
          <button className="btn-pedir-mas" onClick={onPedirMas}>Pedir Más Productos</button>
          <button className="btn-terminar-pedido" onClick={onTerminarPedido}>Terminar Pedido</button>
          <button className="btn-cancelar-pedido" onClick={onCancelar}>Cancelar Pedido</button>
        </div>
      </div>
    </div>
  );
}

export default PedidoConfirmacion;