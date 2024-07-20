function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

soBoaNoticia(7);
soBoaNoticia(6);
console.log("--------------------");

Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
};

imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(6);
imprimirResultado(3);
