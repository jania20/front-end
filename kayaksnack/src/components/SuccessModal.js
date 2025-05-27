import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ message, timeEstimate, onClose, isPaymentSuccess, paymentMessage }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>¡Pedido Recibido!</h2>
                <p>{message}</p>
                {timeEstimate && (
                    <p className="modal-time-estimate">
                        Tiempo estimado de preparación: <strong>{timeEstimate}</strong>
                    </p>
                )}
                {isPaymentSuccess && (
                    <p className="modal-payment-status">
                        Estado del Pago: <strong className="payment-success">{paymentMessage}</strong>
                    </p>
                )}
                <button onClick={onClose} className="modal-close-button">Aceptar</button>
            </div>
        </div>
    );
};

export default SuccessModal;