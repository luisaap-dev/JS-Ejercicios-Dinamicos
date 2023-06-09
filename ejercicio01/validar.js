/* -- Validación de formularios: crea unha función que se executa ao enviar un formulario e verifica 
    se os campos obrigatorios están completos e se os datos introducidos son válidos. Podes comprobar cousas 
    como a lonxitude dunha cadea, o formato dun correo electrónico ou o intervalo de valores nun campo numérico. -- 
*/
function validarFormulario() {
    // Obtener los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = parseInt(document.getElementById("age").value); // Nos aseguramos que es un numero entero

    
    // Verificar si los campos obligatorios están completos
    if (nombre == "" || email == "" || edad == "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
    }
    
    // Verificar si el nombre tiene al menos 3 caracteres
    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return false;
    }
    
    // Verificar si el email tiene un formato válido
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
  