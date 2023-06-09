class Calculadora {
    constructor() {
      this.resultado = 0;
    }
  
     sumar(num1, num2) {
      this.resultado = num1 + num2;
      return this.resultado;
    }
  
    restar(num1, num2) {
      this.resultado = num1 - num2;
      return this.resultado;
    }
  
    multiplicar(num1, num2) {
      this.resultado = num1 * num2;
      return this.resultado;
    }
  
    dividir(num1, num2) {
      if (num2 === 0) {
        return "No se puede dividir entre cero";
      } else {
        this.resultado = num1 / num2;
        return this.resultado;
      }
    }
  }
  
  // Creamos una instancia de la clase Calculadora
  let operacion = new Calculadora();
  
  // Funciones para cada botón de operación
  function sumar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = operacion.sumar(num1, num2);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function restar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = operacion.restar(num1, num2);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function multiplicar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = operacion.multiplicar(num1, num2);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function dividir() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = operacion.dividir(num1, num2);
    document.getElementById("resultado").innerHTML = resultado;
  }