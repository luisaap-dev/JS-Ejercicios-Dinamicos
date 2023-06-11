// Función para actualizar el reloj en tiempo real cada 10ms
function actualizarReloj() {
    // Obtener la referencia al elemento del DOM donde se mostrará el reloj
    var relojElement = document.getElementById("reloj");

    // Crear un objeto de fecha y hora actual
    var now = new Date();

    // Obtener la hora actual y agregar ceros si es necesario
    var h = formatoHMS(now.getHours());

    // Obtener los minutos actuales y agregar ceros si es necesario
    var m = formatoHMS(now.getMinutes());

    // Obtener los segundos actuales y agregar ceros si es necesario
    var s = formatoHMS(now.getSeconds());

    // Actualizar el contenido del elemento del DOM con la hora actual formateada
    relojElement.innerHTML = h + ":" + m + ":" + s;

    // Si es la hora en punto (00:00)
    if (m === '00' && s === '00') {
        // Crear un objeto de audio con el sonido para la hora en punto
        var audio1 = new Audio('audio/alarmaDigital.mp3');
        audio1.type = 'audio/mpeg';
        audio1.autoplay = true;
        audio1.loop = true;

        // Agregar el objeto de audio al documento
        document.body.appendChild(audio1);
    }
}

// Función para agregar ceros a números menores que 10
function formatoHMS(numero) {
    if (numero < 10) {
        return "0" + numero; // Agrega un cero al principio si el número es menor que 10
    } else {
        return numero.toString(); // Convierte el número en cadena y lo devuelve
    }
}

// Llamar a la función para agregar el audio al cargar la página
window.onload = function() {
    agregarAudio();
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Llamar a la función actualizarReloj cada 10ms para mantener el reloj actualizado
    setInterval(actualizarReloj, 10);
});
