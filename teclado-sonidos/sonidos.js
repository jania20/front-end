document.addEventListener("DOMContentLoaded", () => {
    const letras = document.querySelectorAll(".contenedor .tecla");

    const sonidosLetra = {
        a: "boom.wav",
        b: "clap.wav",
        c: "hihat.wav",
        d: "kick.wav",
        e: "snare.wav"
    };

    letras.forEach(letra => {
        letra.addEventListener("click", () => {
            const letraTexto = letra.textContent.toLowerCase();
            const archivo = sonidosLetra[letraTexto];

            if (archivo) {
                const sonido = new Audio(`sonidos/${archivo}`);
                sonido.play();
            } else {
                console.log(`No hay sonido para la letra "${letraTexto}"`);
            }
        });
    });
});
