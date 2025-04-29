document.addEventListener('DOMContentLoaded', function() {
    const inputIngrediente = document.getElementById('ingrediente');
    const btnAgregar = document.getElementById('btn-agregar');
    const btnCompletar = document.getElementById('btn-completar');
    const hamburguesaFinal = document.getElementById('hamburguesa-final');
    const mensajeTemporal = document.getElementById('mensaje-temporal');
    
    let ingredientes = [];
    
    function ordenarHamburguesa(ingredientes) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (ingredientes.includes('pulpo') || ingredientes.includes('cebolla')) {
                    reject("Lo siento, no tenemos pulpo ni cebolla disponible 😔");
                } else if (ingredientes.length === 0) {
                    reject("Debes agregar al menos un ingrediente");
                } else {
                    resolve(`¡Tu hamburguesa con ${ingredientes.join(', ')} está lista! 🍔`);
                }
            }, 1500);
        });
    }
    
    function mostrarMensaje(texto, tipo) {
        mensajeTemporal.textContent = texto;
        mensajeTemporal.className = '';
        mensajeTemporal.classList.add(tipo);
        
        setTimeout(() => {
            mensajeTemporal.className = '';
            mensajeTemporal.textContent = '';
        }, 3000);
    }
    
    btnAgregar.addEventListener('click', function() {
        const ingrediente = inputIngrediente.value.trim();
        if (ingrediente) {
            ingredientes.push(ingrediente);
            inputIngrediente.value = '';
            mostrarMensaje(`"${ingrediente}" agregado`, 'success');
            inputIngrediente.focus();
        } else {
            mostrarMensaje('Escribe un ingrediente primero', 'error');
        }
    });
    
    btnCompletar.addEventListener('click', function() {
        hamburguesaFinal.style.display = 'none';
        
        ordenarHamburguesa(ingredientes)
            .then(function(hamburguesa) {
                hamburguesaFinal.textContent = hamburguesa;
                hamburguesaFinal.style.display = 'block';
                ingredientes = [];
                mostrarMensaje('¡Pedido completado con éxito!', 'success');
            })
            .catch(function(error) {
                mostrarMensaje(error, 'error');
            });
    });
    
    inputIngrediente.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            btnAgregar.click();
        }
    });
});