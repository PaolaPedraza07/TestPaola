const Calculadora = require('./Calculadora');
const calc = new Calculadora();

describe('Pruebas de la calculadora', () => {
  test('suma de 5 + 3 debe ser 8', () => {
    expect(calc.suma(5, 3)).toBe(8);
  });

  test('resta de 10 - 4 debe ser 6', () => {
    expect(calc.resta(10, 4)).toBe(6);
  });

  test('multiplicación de 6 * 7 debe ser 42', () => {
    expect(calc.multiplicacion(6, 7)).toBe(42);
  });

  test('división de 12 / 4 debe ser 3', () => {
    expect(calc.division(12, 4)).toBe(3);
  });

  test('división entre 0 debe lanzar error', () => {
    expect(() => calc.division(10, 0)).toThrow('No se puede dividir entre 0');
  });
});
