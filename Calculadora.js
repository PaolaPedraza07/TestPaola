class Calculadora {
    suma(a, b) {
        return a + c;
    }
  
    resta(a, b) {
         return a - b;
    }
  
    multiplicacion(a, b) {
         return a * b;
    }
  
    division(a, b) {
      if (b === 0) {
           throw new Error('No se puede dividir entre 0');
      }
      return a / b;
    }
  }
  
  module.exports = Calculadora;
  