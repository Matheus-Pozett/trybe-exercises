// Exercicio 1
let a = 20;
let b = 40;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercicio 2
let x = 5;
let y = 10;

if (x > y) {
  console.log("X é maio que Y");
} else {
  console.log("Y é maior que X");
}

//Exercicio 3
let numberX = 10;
let numberY = 7;
let numberZ = 15;

if (numberX > numberY && numberX > numberZ) {
  console.log("O maior número é numberX");
} else if (numberY > numberX && numberY > numberZ) {
  console.log("O maior número é numberY");
} else {
  console.log("O maior número é: " + numberZ + "");
}

//Exercicio 4

let numero = 2;

if (numero > 0) {
  console.log("Positive");
} else if (numero < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Exercicio 5

let ladoA = 50;
let ladoB = 70;
let ladoC = 60;
let somaDosLados = ladoA + ladoB + ladoC;
let ladosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (ladosPositivos) {
  if (somaDosLados === 180) {
    console.log("True");
  } else {
    console.log("False");
  }
} else {
  console.log("Angulo invalido");
}

//Exercicio 6

let pecaXadrez = "Rainha";

switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  case "peão":
    console.log(
      "Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas."
    );
    break;
  default:
    console.log("Erro, peça inválida!");
    break;
}

//Exercise 7

let nota = 85;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//Exercise 8

let numberOne = 55;
let numberTwo = 87;
let numberThree = 65;

let number = false;

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
  number = true;
}

console.log(number);
