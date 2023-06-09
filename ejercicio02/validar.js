var imagen = document.getElementById("imagen");

// Añadimos un event listener que se activará cuando se haga clic en la imagen
imagen.addEventListener("click", function() {

  // Aquí va el código que se ejecutará cuando se haga clic en la imagen
  // Cambiamos la fuente de la imagen a otra imagen llamada "cruz.png"
  imagen.src = "cruz.png";

});