// Función para actualizar el reloj en tiempo real cada 10ms
function actualizarReloj() {
    var now = new Date(); // Crear un objeto de fecha y hora actual
    var h = formatoHMS(now.getHours()); // Obtener la hora actual y agregar ceros si es necesario
    var m = formatoHMS(now.getMinutes()); // Obtener los minutos actuales y agregar ceros si es necesario
    var s = formatoHMS(now.getSeconds()); // Obtener los segundos actuales y agregar ceros si es necesario
    document.getElementById("reloj").innerHTML = h + ":" + m +":"+ s; // Actualizar el reloj con la hora actual formateada

    if (m == '00' && s == '00') { // Si es la hora en punto (00:00)
        var audio1 = new Audio('audio/alarmaDigital.mp3'); // Crear un objeto de audio con el sonido para la hora en punto
        audio1.load(); // Cargar el archivo de audio
        audio1.play(); // Reproducir el sonido para la hora en punto
    } else {
        var audio2 = new Audio('audio/ticTac.mp3'); // Crear un objeto de audio con el sonido para el funcionamiento del reloj
        audio2.load(); // Cargar el archivo de audio
        audio2.play(); // Reproducir el sonido para el funcionamiento del reloj
    }
}

// Función para agregar ceros a números menores que 10
function formatoHMS(numero) {
    if (numero < 10) {
        return "0" + numero; // Si el número es menor que 10, agregar un cero al principio
    } else {
        return numero; // Si el número es mayor o igual a 10, devolver el número como está
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función actualizarReloj cada 10ms para mantener el reloj actualizado
    setInterval(actualizarReloj, 10);
});
