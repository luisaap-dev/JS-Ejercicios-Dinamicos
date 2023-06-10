function agregarNumero(numero) {
  // Obtener el valor actual del campo de operaciones
  var operacion = document.getElementById('operacion').value;

  // Verificar si el valor actual es '0'
  if (operacion === '0') {
    // Si es '0', reemplazarlo con el número seleccionado
    document.getElementById('operacion').value = numero;
  } else {
    // Si no es '0', agregar el número seleccionado al final
    document.getElementById('operacion').value += numero;
  }
}

function agregarOperador(operador) {
  // Obtener el valor actual del campo de operaciones
  var operacion = document.getElementById('operacion').value;

  // Verificar si el valor actual es '0'
  if (operacion === '0') {
    // Si es '0', reemplazarlo con el operador seleccionado
    document.getElementById('operacion').value = operador;
  } else {
    // Si no es '0', agregar el operador seleccionado al final
    document.getElementById('operacion').value += operador;
  }
}

function limpiarCampos() {
  // Limpiar el campo de operaciones
  document.getElementById('operacion').value = '';
}

function calcular() {
  // Obtener el valor actual del campo de operaciones
  var operacion = document.getElementById('operacion').value;

  // Verificar si el campo está vacío
  if (operacion === '') {
    // Si está vacío, borrar el contenido y salir de la función
    document.getElementById('operacion').value = '';
    return;
  }

  // Evaluar la operación ingresada
  var resultado = eval(operacion);

  // Verificar si el resultado es NaN (no es un número)
  if (isNaN(resultado)) {
    // Si es NaN, mostrar 'Error' en el campo de operaciones
    document.getElementById('operacion').value = 'Error';
  } else {
    // Si es un número válido, mostrar el resultado como un número entero
    document.getElementById('operacion').value = parseInt(resultado);
  }
}
