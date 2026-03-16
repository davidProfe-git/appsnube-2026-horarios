const { suma, resta, multiplicacion, division, esPar } = require('./calculadora');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2,3)).toBe(5);
});

test('resta 5 - 2 debe ser 3', () => {
  expect(resta(5,2)).toBe(3);
});

test('multiplicacion 4 * 3 debe ser 12', () => {
  expect(multiplicacion(4,3)).toBe(12);
});

test('division 10 / 2 debe ser 5', () => {
  expect(division(10,2)).toBe(5);
});

test('6 es par', () => {
  expect(esPar(6)).toBe(true);
});

test('7 es impar', () => {
  expect(esPar(7)).toBe(false);
});