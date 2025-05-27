
import React from 'react';

const IngredienteInputs = ({ label, placeholder, suggestions, currentValue, onValueChange, onAddClick, isDisabled, errorMessage }) => {
    return (
        <div className="ingrediente-input-wrapper">
            <label htmlFor="ingrediente-input" className="etiqueta-campo">{label}</label>
            <div className="ingrediente-input-container"> 
                <input
                    type="text"
                    id="ingrediente-input"
                    className={`input-text ${errorMessage ? 'input-error' : ''}`}
                    placeholder={placeholder}
                    list="ingrediente-suggestions"
                    value={currentValue}
                    onChange={(e) => onValueChange(e.target.value)}
                    aria-invalid={errorMessage ? "true" : "false"}
                    aria-describedby="error-ingrediente"
                />
                <datalist id="ingrediente-suggestions">
                    {suggestions.map((ing, index) => (
                        <option key={index} value={ing} />
                    ))}
                </datalist>
                <button
                    type="button"
                    onClick={onAddClick}
                    className="boton-anadir-ingrediente" 
                    disabled={isDisabled} 
                >
                    Añadir
                </button>
            </div>
            {errorMessage && <p id="error-ingrediente" className="mensaje-error">{errorMessage}</p>}
        </div>
    );
};

export default IngredienteInputs;