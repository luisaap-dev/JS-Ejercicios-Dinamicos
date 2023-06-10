function contadorCaracteres() {
  // Busca el elemento del DOM con el id "contador_caracteres"
  const entradaDatos = document.querySelector('#contador_caracteres');
  // Busca el elemento del DOM con el id "contador"
  const contadorCaracteres = document.querySelector('#contador');

  // Agrega un evento "input" al campo de texto para contar los caracteres en tiempo real
  entradaDatos.addEventListener('input', () => {
    // Obtiene la cantidad de caracteres ingresados
    const numCaracteres = entradaDatos.value.length;
    if (numCaracteres <= 10) {
      // Muestra la cantidad de caracteres restantes en el contador
      contadorCaracteres.innerHTML = numCaracteres + " caracteres";
    } else {
      // Si se supera el límite de caracteres, muestra una alerta
      alert("10 es el número máximo");
    }
  });
}

// Espera a que el documento HTML se haya cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", contadorCaracteres);
