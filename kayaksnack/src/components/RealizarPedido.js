// src/components/RealizarPedido.js
import React, { useState, useEffect, useCallback } from 'react';
import './RealizarPedido.css';
import IngredienteInputs from './IngredienteInputs';
import SuccessModal from './SuccessModal'; 

function RealizarPedido() {
    const productosConfig = {
        '': [],
        'Fruta Fresca': ['Chamoy', 'Tajín', 'Miguelito', 'Leche Condensada', 'Sal', 'Limón', 'Miel'],
        'Elote en vaso': ['Queso Cotija', 'Mayonesa', 'Chili en polvo', 'Crema', 'Mantequilla', 'Limón', 'Sal'],
        'Russa': [],
        'Tosticeviche': ['Salsa Negra', 'Aguacate', 'Limón'],
        'Tostielote': ['Queso Cotija', 'Mayonesa', 'Chili en polvo', 'Crema', 'Mantequilla'],
        'Boyas': ['Chamoy', 'Tajín', 'Miguelito'],
        'Tostada': ['Crema', 'Queso', 'Aguacate'],
        'Litro Ceviche': ['Aguacate', 'Salsa Picante', 'Limón'],
        'Chilidog': ['Chili', 'Queso', 'Jalapeños', 'Cebolla'],
    };

    const productosDisponibles = ['', ...Object.keys(productosConfig).filter(key => key !== '')];

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        producto: '',
        ingredientes: [],
        cantidad: 1,
        metodoEntrega: 'recoger',
        direccion: '',
        metodoPago: 'fisico',
    });

    const [errors, setErrors] = useState({});
    const [currentIngredienteInput, setCurrentIngredienteInput] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // NUEVOS ESTADOS PARA EL MODAL Y PAGO
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [orderTimeEstimate, setOrderTimeEstimate] = useState('');
    const [showPaymentFields, setShowPaymentFields] = useState(false); 
    const [paymentDetails, setPaymentDetails] = useState({ 
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });
    const [paymentErrors, setPaymentErrors] = useState({}); 
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const ingredientesParaProductoActual = productosConfig[formData.producto] || [];

    // Esta función de validación se ejecutará al intentar SUBMIT
    const validateForm = useCallback(() => {
        let isValid = true;
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido.';
            isValid = false;
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es requerido.';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.telefono.trim())) {
           //validacion de los 10 digitos
            newErrors.telefono = 'El teléfono debe tener 10 dígitos.';
            isValid = false;
        }

        if (!formData.producto) {
            newErrors.producto = 'Selecciona un producto.';
            isValid = false;
        }

        if (formData.cantidad < 1) {
            newErrors.cantidad = 'La cantidad debe ser al menos 1.';
            isValid = false;
        }

        if (formData.metodoEntrega === 'domicilio' && !formData.direccion.trim()) {
            newErrors.direccion = 'La dirección es requerida para el servicio a domicilio.';
            isValid = false;
        }

        setErrors(newErrors); // Los errores se establecerán aquí, pero solo se verán en el submit
        return isValid;
    }, [formData]);

    // Validación para el formulario de pago (simulado)
    const validatePaymentForm = useCallback(() => {
        let isValid = true;
        const newErrors = {};

        if (!paymentDetails.cardNumber.trim() || !/^\d{16}$/.test(paymentDetails.cardNumber.trim())) {
            newErrors.cardNumber = 'Número de tarjeta inválido (16 dígitos).';
            isValid = false;
        }
        if (!paymentDetails.expiryDate.trim() || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate.trim())) {
            newErrors.expiryDate = 'Fecha de expiración inválida (MM/AA).';
            isValid = false;
        }
        if (!paymentDetails.cvc.trim() || !/^\d{3,4}$/.test(paymentDetails.cvc.trim())) {
            newErrors.cvc = 'CVC inválido (3 o 4 dígitos).';
            isValid = false;
        }

        setPaymentErrors(newErrors);
        return isValid;
    }, [paymentDetails]);

    // CAMBIO CLAVE AQUÍ: isSubmitDisabled se basa solo en campos requeridos básicos
    // para evitar la validación completa en cada keystroke.
    useEffect(() => {
        const areBasicFieldsFilled =
            formData.nombre.trim() !== '' &&
            formData.telefono.trim() !== '' && // Solo verifica que no esté vacío
            formData.producto !== '' &&
            formData.cantidad >= 1 &&
            (formData.metodoEntrega !== 'domicilio' || formData.direccion.trim() !== '');

        let isPaymentSectionReady = true;
        if (formData.metodoPago === 'online' && showPaymentFields) {
            // Para el envío del formulario principal, el pago debe estar marcado como completado
            isPaymentSectionReady = paymentCompleted;
        }

        // El botón de submit se habilitará si los campos básicos están llenos
        // Y, si el método de pago es online, el pago debe estar completado
        setIsSubmitDisabled(!(areBasicFieldsFilled && isPaymentSectionReady));

    }, [formData, showPaymentFields, paymentCompleted]); // Se elimina 'validateForm' de las dependencias


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Al cambiar un campo, solo se limpia su error específico
        // La validación completa ocurrirá al hacer submit
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        if (name === 'producto') {
            setFormData(prev => ({
                ...prev,
                ingredientes: []
            }));
            setCurrentIngredienteInput('');
            setErrors(prev => ({ ...prev, currentIngredienteInput: '' }));
        }

        // Lógica para mostrar/ocultar campos de pago al cambiar el método de pago
        if (name === 'metodoPago') {
            if (value === 'online') {
                setShowPaymentFields(true);
            } else {
                setShowPaymentFields(false);
                setPaymentCompleted(false); 
                setPaymentDetails({ cardNumber: '', expiryDate: '', cvc: '' }); 
                setPaymentErrors({}); // Limpia errores de pago
            }
        }
    };

    const handlePaymentDetailsChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({ ...prev, [name]: value }));
        setPaymentErrors(prev => ({ ...prev, [name]: '' }));
        setPaymentCompleted(false); 
    };

    const handleAddIngrediente = () => {
        const ingredienteToAdd = currentIngredienteInput.trim();
        let ingredienteError = '';

        if (!ingredienteToAdd) {
            ingredienteError = 'Por favor, escribe un ingrediente para añadir.';
        } else if (!ingredientesParaProductoActual.includes(ingredienteToAdd)) {
            ingredienteError = `"${ingredienteToAdd}" no es un ingrediente válido para "${formData.producto}".`;
        } else if (formData.ingredientes.includes(ingredienteToAdd)) {
            ingredienteError = `"${ingredienteToAdd}" ya ha sido añadido.`;
        }

        if (ingredienteError) {
            setErrors(prev => ({ ...prev, currentIngredienteInput: ingredienteError }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            ingredientes: [...prev.ingredientes, ingredienteToAdd]
        }));
        setCurrentIngredienteInput('');
        setErrors(prev => ({ ...prev, currentIngredienteInput: '' }));
    };

    const handleRemoveIngrediente = (ingredienteToRemove) => {
        setFormData(prev => ({
            ...prev,
            ingredientes: prev.ingredientes.filter(ing => ing !== ingredienteToRemove)
        }));
    };

    const isAddIngredienteDisabled = !currentIngredienteInput.trim() ||
                                     !ingredientesParaProductoActual.includes(currentIngredienteInput.trim()) ||
                                     formData.ingredientes.includes(currentIngredienteInput.trim());

    // Nueva función para "procesar" el pago en línea
    const handleProcessOnlinePayment = () => {
        const paymentIsValid = validatePaymentForm();
        if (paymentIsValid) {
            // Simulamos un procesamiento de pago exitoso
            setPaymentCompleted(true);
            alert('¡Pago en línea procesado con éxito! Ahora puedes completar tu pedido.');
        } else {
            alert('Por favor, corrige los datos de pago.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Al hacer submit, SIEMPRE se ejecuta la validación completa
        const formIsValid = validateForm();

        if (formIsValid) {
            // Si el método de pago es online y no se ha completado, no se puede enviar el pedido final
            if (formData.metodoPago === 'online' && !paymentCompleted) {
                alert('Por favor, procesa tu pago en línea primero.');
                return;
            }

            console.log("Pedido Enviado:", formData);
            if (formData.metodoPago === 'online') {
                console.log("Detalles de Pago (simulados):", paymentDetails);
            }

            // Determina el tiempo estimado
            let estimate = '';
            if (formData.metodoEntrega === 'recoger') {
                estimate = '20 - 30 minutos';
            } else { // domicilio
                estimate = '30 - 45 minutos';
            }
            setOrderTimeEstimate(estimate);

            // Mostrar el modal de éxito
            setShowSuccessModal(true);

            // Resetea el formulario después de un envío exitoso
            setFormData({
                nombre: '',
                telefono: '',
                producto: '',
                ingredientes: [],
                cantidad: 1,
                metodoEntrega: 'recoger',
                direccion: '',
                metodoPago: 'fisico',
            });
            setErrors({});
            setCurrentIngredienteInput('');
            setPaymentDetails({ cardNumber: '', expiryDate: '', cvc: '' });
            setPaymentErrors({});
            setShowPaymentFields(false);
            setPaymentCompleted(false);
        } else {
            alert('Por favor, completa todos los campos requeridos y corrige los errores.');
            // Enfoca el primer campo con error para mejorar la UX
            const firstErrorField = Object.keys(errors)[0];
            if (firstErrorField) {
                document.getElementById(firstErrorField)?.focus();
            }
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="seccion-realizar-pedido">
            <h1 className="titulo-principal">Haz tu Pedido</h1>
            <hr className="linea-debajo-titulo" />
            <p className="subtitulo-principal">Personaliza tu antojo y disfruta de los mejores snacks de Kayak Snack</p>

            <form onSubmit={handleSubmit} className="formulario-contenedor">
                {/* Campo Producto */}
                <div className="campo-grupo">
                    <label htmlFor="producto" className="etiqueta-campo">
                        Selecciona tu antojo <span className="required-asterisk">*</span>
                    </label>
                    <select
                        id="producto"
                        name="producto"
                        value={formData.producto}
                        onChange={handleChange}
                        className={`input-select ${errors.producto ? 'input-error' : ''}`}
                        aria-invalid={errors.producto ? "true" : "false"}
                        aria-describedby="error-producto"
                    >
                        <option value="">-- Elige un producto --</option>
                        {productosDisponibles.filter(p => p !== '').map(producto => (
                            <option key={producto} value={producto}>{producto}</option>
                        ))}
                    </select>
                    {errors.producto && <p id="error-producto" className="mensaje-error">{errors.producto}</p>}
                </div>

                {/* Sección de añadir ingredientes (mostrar solo si el producto tiene ingredientes definidos) */}
                {formData.producto && ingredientesParaProductoActual.length > 0 && (
                    <div className="campo-grupo">
                        <IngredienteInputs
                            label="Añadir ingredientes (opcional)"
                            placeholder="Ingrediente a añadir"
                            suggestions={ingredientesParaProductoActual}
                            currentValue={currentIngredienteInput}
                            onValueChange={setCurrentIngredienteInput}
                            onAddClick={handleAddIngrediente}
                            isDisabled={isAddIngredienteDisabled}
                            errorMessage={errors.currentIngredienteInput}
                        />
                        {formData.ingredientes.length > 0 && (
                            <div className="ingredientes-agregados">
                                <p className="titulo-agregados">Agregados:</p>
                                <ul className="lista-agregados">
                                    {formData.ingredientes.map(ingrediente => (
                                        <li key={ingrediente}>
                                            {ingrediente}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveIngrediente(ingrediente)}
                                                className="boton-eliminar-ingrediente"
                                                title="Eliminar ingrediente"
                                            >
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Campo Nombre */}
                <div className="campo-grupo">
                    <label htmlFor="nombre" className="etiqueta-campo">
                        Tu Nombre: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`input-text ${errors.nombre ? 'input-error' : ''}`}
                        placeholder="Escribe tu nombre"
                        aria-invalid={errors.nombre ? "true" : "false"}
                        aria-describedby="error-nombre"
                    />
                    {errors.nombre && <p id="error-nombre" className="mensaje-error">{errors.nombre}</p>}
                </div>

                {/* Campo Teléfono */}
                <div className="campo-grupo">
                    <label htmlFor="telefono" className="etiqueta-campo">
                        Número de Teléfono: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`input-text ${errors.telefono ? 'input-error' : ''}`}
                        placeholder="Ej: 8112345678"
                        aria-invalid={errors.telefono ? "true" : "false"}
                        aria-describedby="error-telefono"
                    />
                    {errors.telefono && <p id="error-telefono" className="mensaje-error">{errors.telefono}</p>}
                </div>

                {/* Campo Cantidad */}
                <div className="campo-grupo">
                    <label htmlFor="cantidad" className="etiqueta-campo">
                        Cantidad: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="number"
                        id="cantidad"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={handleChange}
                        className={`input-text ${errors.cantidad ? 'input-error' : ''}`}
                        min="1"
                        aria-invalid={errors.cantidad ? "true" : "false"}
                        aria-describedby="error-cantidad"
                    />
                    {errors.cantidad && <p id="error-cantidad" className="mensaje-error">{errors.cantidad}</p>}
                </div>

                {/* Campo Método de Entrega */}
                <div className="campo-grupo">
                    <label htmlFor="metodoEntrega" className="etiqueta-campo">
                        Método de entrega: <span className="required-asterisk">*</span>
                    </label>
                    <select
                        id="metodoEntrega"
                        name="metodoEntrega"
                        value={formData.metodoEntrega}
                        onChange={handleChange}
                        className="input-select"
                    >
                        <option value="recoger">Recoger en local</option>
                        <option value="domicilio">Servicio a domicilio</option>
                    </select>
                </div>

                {/* Campo Dirección (solo si el método de entrega es "domicilio") */}
                {formData.metodoEntrega === 'domicilio' && (
                    <div className="campo-grupo">
                        <label htmlFor="direccion" className="etiqueta-campo">
                            Dirección de entrega: <span className="required-asterisk">*</span>
                        </label>
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            className={`input-text ${errors.direccion ? 'input-error' : ''}`}
                            placeholder="Calle, número, colonia, código postal"
                            aria-invalid={errors.direccion ? "true" : "false"}
                            aria-describedby="error-direccion"
                        />
                        {errors.direccion && <p id="error-direccion" className="mensaje-error">{errors.direccion}</p>}
                    </div>
                )}

                {/* Campo Método de Pago */}
                <div className="campo-grupo">
                    <label htmlFor="metodoPago" className="etiqueta-campo">
                        Método de pago: <span className="required-asterisk">*</span>
                    </label>
                    <select
                        id="metodoPago"
                        name="metodoPago"
                        value={formData.metodoPago}
                        onChange={handleChange}
                        className="input-select"
                    >
                        <option value="fisico">Pagar en físico (Contra entrega)</option>
                        <option value="online">Pagar en línea</option>
                    </select>
                </div>

                {/* Campos de pago en línea (aparecen si metodoPago es 'online' y aún no se ha completado el pago) */}
                {showPaymentFields && !paymentCompleted && (
                    <div className="campo-grupo payment-fields-container">
                        <h3>Detalles de Pago en Línea</h3>
                        <div className="campo-grupo">
                            <label htmlFor="cardNumber" className="etiqueta-campo">Número de Tarjeta:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={paymentDetails.cardNumber}
                                onChange={handlePaymentDetailsChange}
                                className={`input-text ${paymentErrors.cardNumber ? 'input-error' : ''}`}
                                placeholder="XXXX XXXX XXXX XXXX"
                                maxLength="16"
                                aria-invalid={paymentErrors.cardNumber ? "true" : "false"}
                                aria-describedby="error-cardNumber"
                            />
                            {paymentErrors.cardNumber && <p id="error-cardNumber" className="mensaje-error">{paymentErrors.cardNumber}</p>}
                        </div>
                        <div className="campo-grupo campo-row">
                            <div className="campo-col">
                                <label htmlFor="expiryDate" className="etiqueta-campo">Fecha Exp. (MM/AA):</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={paymentDetails.expiryDate}
                                    onChange={handlePaymentDetailsChange}
                                    className={`input-text ${paymentErrors.expiryDate ? 'input-error' : ''}`}
                                    placeholder="MM/AA"
                                    maxLength="5"
                                    aria-invalid={paymentErrors.expiryDate ? "true" : "false"}
                                    aria-describedby="error-expiryDate"
                                />
                                {paymentErrors.expiryDate && <p id="error-expiryDate" className="mensaje-error">{paymentErrors.expiryDate}</p>}
                            </div>
                            <div className="campo-col">
                                <label htmlFor="cvc" className="etiqueta-campo">CVC:</label>
                                <input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    value={paymentDetails.cvc}
                                    onChange={handlePaymentDetailsChange}
                                    className={`input-text ${paymentErrors.cvc ? 'input-error' : ''}`}
                                    placeholder="123"
                                    maxLength="4"
                                    aria-invalid={paymentErrors.cvc ? "true" : "false"}
                                    aria-describedby="error-cvc"
                                />
                                {paymentErrors.cvc && <p id="error-cvc" className="mensaje-error">{paymentErrors.cvc}</p>}
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleProcessOnlinePayment}
                            className="boton-procesar-pago"
                        >
                            Procesar Pago
                        </button>
                    </div>
                )}

                {/* Mensaje de pago completado */}
                {paymentCompleted && formData.metodoPago === 'online' && (
                    <div className="mensaje-pago-completado">
                        <p>✅ ¡Pago en línea: <strong>Pagado</strong>!</p>
                        <p>Ahora puedes completar tu pedido.</p>
                    </div>
                )}

                {/* Botón para completar el pedido */}
                <button
                    type="submit"
                    className="boton-completar-pedido"
                    disabled={isSubmitDisabled}
                >
                    Completar Pedido
                </button>
            </form>

            <p className="info-telefono">
                Si prefieres, también puedes hacer tu pedido llamando al: <strong>81 1234 5678</strong>
            </p>

            {/* Renderiza el modal de éxito si showSuccessModal es true */}
            {showSuccessModal && (
                <SuccessModal
                    message="¡Tu pedido ha sido enviado con éxito! Nos pondremos en contacto contigo pronto."
                    timeEstimate={orderTimeEstimate}
                    onClose={handleCloseModal}
                    isPaymentSuccess={formData.metodoPago === 'online' && paymentCompleted}
                    paymentMessage="Pagado"
                />
            )}
        </div>
    );
}

export default RealizarPedido;