const calculadora = require("../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);

  expect(resultado).toBe(4);
});

test("Somar 5 + 2 deveria retornar 7", () => {
  const resultado = calculadora.somar(5, 2);

  expect(resultado).toBe(7);
});

test("Somar 'Banana + 2 deveria retornar Erro", () => {
  const resultado = calculadora.somar('Banana', 2);

  expect(resultado).toBe('Erro');
});