//TIPOS DE COMENTARIOS

//Comentário
/* 
        Comentários multiplas linhas 
    */

//TIPOS DE VARIAVEIS E TIPAGEM FRACA
var a = 1;
let b = 1;
var a = 30; //NAO VAI DAR ERRO POR TER 2 VARIAVEIS IGUAIS. VAI ASSUMIR O ULTIMO VALOR
const c = 2;
b += "teste";
console.log(typeof b);
console.log(Number.isInteger(a));

const pi = Number("3.141516");
console.log(typeof pi);
console.log(pi.toFixed(2)); //DEIXA A CONSTANTE PI COM APENAS 2 CASAS DECIMAIS
console.log(pi.toString(2)); //TRANSFORMA O VALOR DE PI PARA VALOR BINARIO
console.log(typeof a);
b = a.toString(); //TRANSFORMA O VALOR DE NUMBER PARA STRING
console.log(typeof b);

//CUIDADOS AO UTILIZAR JAVASCRIPT
console.log(7 / 0); //NAO DA ERRO AO CALCULAR UM NUMERO INFINITO
console.log("10" / 2); //E DEIXA DIVIDIR UM "STRING" POR UM NUMBER, FAZ A CONVERSAO INTERNAMENTE.
console.log(0.1 + 0.7); //

//UTILIZANDO BIBLIOTECA MATH
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area);
console.log(typeof Math);

//STRINGS
const escola = "marcosolenka";
console.log(escola.charAt(4));
console.log(escola.indexOf("a"));
console.log(escola.substring(2));
console.log(escola.substring(0, 3));
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace("a", "x"));
console.log("marcos, vinicius, olenka, macedo".split(","));
console.log(`Ola ${escola}!`);
const up = (texto) => texto.toUpperCase();
console.log(`Ola senhor  ${up("marcos")}`);

//BOOLEANOS
let isAtivo = false;
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo);

//VALORES QUE SEMPRE DAO FALSO
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

//ARRAYS
const valores = [1, 2, 3, 4, 5];
console.log(valores[2]);
console.log(valores.length);
//NAO É UMA BOA PRATICA MISTURAR TIPOS DE DADOS NO ARRAY
valores.push("teste");
console.log(valores[5]);
console.log(valores.pop());
console.log(valores[5]);
delete valores[1];
console.log(valores);
valores.push(35);
console.log(valores);

//OBJETO
const prod1 = {};
prod1.nome = "Celular";
prod1.preco = "25.05";
console.log(prod1);

const prod2 = {
  nome: "camisa",
  preco: "25.25",
  obj: {
    botao: "p",
  },
};

console.log(prod2);
//JSON NÃO É UM OBJETO!! É UM ARQUIVO NO FORMATO TEXTUAL

//NULL E UNDEFINED
const objA = { name: "a" };
console.log(objA.name);
const objB = objA;
//ISSO ACONTECE POIS AS DUAS VARIAVEIS ESTÃO APONTANDO PARA O MESMO ENDEREÇO DE MEMORIA
objB.name = "teste";
console.log(objA.name);

//TIPOS PRIMITIVOS FAZEM UMA COPIA DE VALOR, TIPOS OBJETOS/FUNCOES FAZEM REFERNCIAS DE MEMORIA
let tipoA = 3;
let tipoB = tipoA;
tipoB++;
console.log(tipoA, " - ", tipoB);

//HOISTING -- FUNCIONA APENAS COM VAR
console.log("valor hoisitng:", hoisting);
var hoisting = 2;
console.log("valor hoisitng:", hoisting);

//QUASE TUDO É FUNÇÃO
console.log(typeof Object);
console.log(typeof new Object());
class Produto {}
console.log(typeof Produto);

//NOTACAO PONTO
console.log(Math.ceil(6.1));

//atribui o nome dinamicamente
const obj1 = {};
obj1.nome = "marcos";
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
}

const obj2 = new Obj("Marcos");
console.log(obj2.nome);

//ATRIBUICOES
let atrib = 5;
atrib += 5;
atrib -= 5;
atrib *= 5;
atrib /= 5;
console.log(atrib);

//OPERADORES DESTRUCTURING
const pessoa = {
  nome: "Marcos",
  idade: 23,
  endereco: {
    logradouro: "Rua ABC",
    numero: 123,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);
const { nome: n, idade: i = "não definida" } = pessoa;
console.log(n, i);
const {
  endereco: { logradouro, numero, cep = 555 },
} = pessoa;
console.log(logradouro, numero, cep);

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const objeto = { max: 50, min: 40 };
console.log(rand(objeto));

//OPERADOR TERNARIO
const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");
console.log(resultado(7.1));

//TRATAMENTO DE ERRO
function tratarErroELancar(erro) {
  throw new Error("Ocorreu um erro de processamento");
}

function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj5 = {
  nome: "Marcos",
};

imprimirNomeGritando(obj5);
