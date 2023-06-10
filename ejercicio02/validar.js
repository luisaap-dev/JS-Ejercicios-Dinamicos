function cambiarImagen() {
  // Obtenemos la referencia al elemento de imagen por su ID
  const imagen = document.getElementById("imagen");

  // Añadimos un event listener al hacer clic en la imagen
  imagen.addEventListener("click", function () {
    // Verificamos si la imagen actual es "circulo.png"
    if (imagen.getAttribute("src") === "circulo.png") {
      // Si es así, cambiamos la fuente de la imagen a "cruz.png"
      imagen.setAttribute("src", "cruz.png");
    } else {
      // Si no, la imagen actual es "cruz.png" o cualquier otra imagen,
      // por lo que cambiamos la fuente de la imagen a "circulo.png"
      imagen.setAttribute("src", "circulo.png");
    }
  });
}

// Espera a que el documento HTML se haya cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", cambiarImagen);
