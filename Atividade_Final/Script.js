// Questão 1 

// let frutas = ["maçã", "banana", "laranja"];
// frutas.unshift('Uva');
// frutas.push("Manga"); 
// frutas.splice(3, 1);

// console.log (frutas);

// Questão 2 

// let saudacao = "Olá";
// let nome = "Maria";
// let texto = `${saudacao},${nome}!`;

// console.log(texto);

// Questão 3 

// let numero = 10; 
// function verificarNum(numero){
//     let resultado = numero % 2 === 0 ? console.log("Par") : console.log("Impar")
// } 
// verificarNum(numero);

// Questão 4 

// let numeros = [5, 12, 8, 130, 44]; 
// let result = numeros.filter(function(numero){
//     return numero > 10; 
// }); 

// console.log(result);

// Questão 5 

// let valores = [10, 20, 30, 40];
// let result = valores.reduce(function(acumulador, numero){
//     return acumulador + numero;
// });

// console.log(result);

// Questão 6 

// let texto = "javascript é legal";
// let textoM = texto.toUpperCase();

// console.log(textoM);

// Questão 7 

// let nome = "Carlos";
// let verificarNome = nome.includes("a");

// console.log(verificarNome);

// Questão 8 

// let cores = ["Azul", "Verde", "Amarelo", "Roxo"];
// cores.splice(1, 1);
// cores.splice(1,1);

// console.log(cores);

// Questão 9 

// let numeros = [10, 20, 30];
// numeros.unshift(5);
// numeros.pop();

// console.log(numeros);

// Questão 10 

// let frase = "Programação é divertida"

// console.log(frase.length);

// Questão 11 

// let frase = "Aprender JavaScript é muito bom";
// let palavras = frase.split(" ");

// console.log(palavras);

// Questão 12 

// let texto = "Eu gosto de JavaScript";
// let palavras = texto.split(" ").reverse().join(" ");

// console.log(palavras);

// Questão 12 + 1 

// let numeros = [1, 2, 3, 4, 5];
// let result = numeros.map(function(numero){
//     return numero * 2;
// }); 

// console.log(result);

// Questão 14 

// let num = [];
// for(let i = 0; i < 10; i++){
//     num.push(Math.floor(Math.random() * 101))
// }
// let filtro = num.filter(function(numero){
//      return numero > 50
// }); 

// console.log(filtro);

// Questão 15 

// let array = [];
// for(let i = 0; i < 5; i++){
//     array.push(Math.floor(Math.random() * 101 ))
// }
// let soma = array.reduce(function(acumulador, numero){
//     return acumulador + numero;
// });

// console.log(soma);
// console.log(!isNaN(soma));

// Questão 16 

// let frase = "O clima está ensolarado"; 
// let nFrase = frase.replace("ensolarado", "chuvoso");

// console.log(nFrase);

// Questão 17 

// let numeros = [40, 10, 30, 20, 50]; 
// numeros.sort((a, b) => a - b); 

// console.log(numeros);

// Questão 18 

// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
// let status = media >= 7 ? "Aprovado" : "Reprovado";
// console.log(media);
// console.log(status);

// Questão 19 

// let numeroStr = "45.67";
// console.log(Math.floor(numeroStr));
// console.log(parseFloat(numeroStr));
// console.log(Math.ceil(numeroStr));

// Questão 20 

// let palavra = "programador"
// let palavras = 0;
// for(let i = 0; i < palavra.length; i++){
//     if (palavra.charAt(i) == "a"){
//         palavras++;
//     }
// }

// console.log(palavras);

// Questão 21 

let str1 = "casa"
let str2 = "CASA"

