function validarFormulario() {
  // Obtener los campos del formulario
  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var edad = parseInt(document.getElementById("age").value); // Asegurarse de que sea un número entero

  // Verificar si los campos obligatorios están completos
  if (nombre === "" || email === "" || isNaN(edad)) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  // Verificar si el nombre tiene al menos 3 caracteres
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return false;
  }

  // Verificar si el email tiene un formato válido
  /* 
  / indica el comienzo y el final de la expresión regular.
  ^ coincide con el inicio de la cadena.
  [^\s@]+ coincide con uno o más caracteres que no sean espacios en blanco ni el símbolo "@".
  @ coincide con el símbolo "@".
  [^\s@]+ coincide con uno o más caracteres que no sean espacios en blanco ni el símbolo "@".
  \. coincide con el símbolo ".".
  [^\s@]+ coincide con uno o más caracteres que no sean espacios en blanco ni el símbolo "@".
  $ coincide con el final de la cadena.
  */
  var validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validarEmail.test(email)) {
    alert("El email no tiene un formato válido.");
    return false;
  }

  // Verificar si la edad está en el rango de 18 a 100 años
  if (edad < 18 || edad > 100) {
    alert("La edad debe estar en el rango de 18 a 100 años.");
    return false;
  }

  // Si todo está correcto, enviar el formulario
  return true;
}
