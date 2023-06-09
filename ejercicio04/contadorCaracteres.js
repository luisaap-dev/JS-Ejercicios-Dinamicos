// Este código busca los elementos del DOM con los ids "contador_caracteres" y "contador"
const entradaDatos = document.querySelector('#contador_caracteres');
const contadorCaracteres = document.querySelector('#contador');

// Se agrega un evento "input" al campo de texto para contar los caracteres
entradaDatos.addEventListener('input', () => {
  const numCaracteres = entradaDatos.value.length; // Se obtiene el número de caracteres ingresados
  if(numCaracteres <=10){
    contadorCaracteres.innerHTML = numCaracteres + " caracteres"; // Se muestra la cantidad de caracteres restantes en el contador
  }else{
    alert("10 es el número máximo"); // Si se supera el límite de caracteres se muestra una alerta
  }  
});