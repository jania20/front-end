/*
document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('article');
    const contOculotWalk = document.querySelector('.cont-ocultowalk');
    const body = document.body;
    const seccionTarjetas = document.querySelector('.seccion-tarjetas');
    const tarjetasContenedor = document.querySelectorAll('.seccion-tarjetas article');

    
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function() {
            
            tarjetasContenedor.forEach(t => t.style.display = 'none');

           
            contOculotWalk.innerHTML = `
                <div class="contenido-tarjeta">
                        <button class="cerrar">X</button>
                        <div class="columna-izquierda">
                            <h2>Juego de soccer</h2>
                            <p><strong>Duración:</strong> 90 min</p>
                            <p>Partido amistoso 5 contra 5 en cancha techada.</p>
                        </div>
                        <div class="columna-derecha">
                            <img class="hidden-soccer" src="./imagenes/soccer.jpg" alt="Soccer">
                        </div>
                    </div>
            `;

            // Muestra el contenedor y desactiva scroll
            contOculotWalk.style.display = 'block';
            body.style.overflow = 'hidden';

            // Evento para cerrar desde el botón
            const cerrarBoton = contOculotWalk.querySelector('.cerrar');
            cerrarBoton.addEventListener('click', function(e) {
                e.stopPropagation(); // Evita que el clic cierre por fuera
                cerrarContenedor();
            });
        });
    });

    function cerrarContenedor() {
        contOculotWalk.style.display = 'none';
        tarjetasContenedor.forEach(t => t.style.display = 'block');
        body.style.overflow = 'auto';
    }

    contOculotWalk.addEventListener('click', function(e) {
        const contenido = contOculotWalk.querySelector('.contenido-tarjeta');
        if (!contenido.contains(e.target)) {
            cerrarContenedor();
        }
    });
});
*/


document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('article');
    const contOculotWalk = document.querySelector('.cont-ocultowalk');
    const body = document.body;
    const tarjetasContenedor = document.querySelectorAll('.seccion-tarjetas article');

    const datosTarjetas = {
        'soccer': {
            titulo: 'Canotaje',
            duracion: '90 min',
            descripcion: 'Rema en botes de equipo (2 personas o 4 personas).',
            imagen: './imagenes/canotaje.jpeg'
        },
        'tenis': {
            titulo: 'Vela',
            duracion: '90 min',
            descripcion: 'Aprende a velear en la presa o en el mar.',
            imagen: './imagenes/vela.jpeg'
        },
        'pilates': {
            titulo: 'Ciclismo en montaña',
            duracion: '40 min',
            descripcion: 'Eres tan joven como te sientes, así que mantén tu cuerpo en movimiento',
            imagen: './imagenes/ciclismo.jpeg'
        },
        'ejercicio': {
            titulo: 'Tiros',
            duracion: '1 hora',
            descripcion: 'Aprende a tirar como la maga Ovalle.',
            imagen: './imagenes/ovalle.jpeg'
        },
        'caminar': {
            titulo: 'Gym',
            duracion: '40 min',
            descripcion: 'No pain, no gain',
            imagen: './imagenes/gym.jpeg'
        },
        'patear-balon': {
            titulo: 'Soccer',
            duracion: '80 min',
            descripcion: 'Conviertete en el mejor jugador como el equipo de los Tigres.',
            imagen: './imagenes/Gignac.jpg'
        }
    };

    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function() {
            const id = tarjeta.getAttribute('data-id');
            const datos = datosTarjetas[id];

            if (!datos) return;

            
            tarjetasContenedor.forEach(t => t.style.display = 'none');

        
            contOculotWalk.innerHTML = `
                <div class="contenido-tarjeta">
                    <button class="cerrar">X</button>
                    <div class="columna-izquierda">
                        <h2>${datos.titulo}</h2>
                        <p><strong>Duración:</strong> ${datos.duracion}</p>
                        <p>${datos.descripcion}</p>
                    </div>
                    <div class="columna-derecha">
                        <img class="hidden-soccer" src="${datos.imagen}" alt="${datos.titulo}">
                    </div>
                </div>
            `;

            contOculotWalk.style.display = 'block';
            body.style.overflow = 'hidden';

            
            const cerrarBoton = contOculotWalk.querySelector('.cerrar');
            cerrarBoton.addEventListener('click', function(e) {
                e.stopPropagation(); 
                cerrarContenedor();
            });
        });
    });

    function cerrarContenedor() {
        contOculotWalk.style.display = 'none';
        tarjetasContenedor.forEach(t => t.style.display = 'block');
        body.style.overflow = 'auto';
    }

    contOculotWalk.addEventListener('click', function(e) {
        const contenido = contOculotWalk.querySelector('.contenido-tarjeta');
        if (!contenido.contains(e.target)) {
            cerrarContenedor();
        }
    });
});
