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

// let str1 = "casa";
// let str2 = "CASA";
// let result = str1 === str2 ? "true" : "False";

//  console.log(result);

// Questão 22 

// let numeros = [15, 20, 25, 30];
// let todosMaioresQue10 = true;

// for(let i = 0; i < numeros.length; i++){
//  if (numeros[i] <= 10) {
//     todosMaioresQue10 = false; 
//      break;
//  }
// }

// console.log(todosMaioresQue10);

// Questão 23 

// let numeros = [5, 8, 12, 3];
// let algumMenorQue5 = false;

//  for(let i = 0; i < numeros.length; i++){
//    if (numeros[i] < 5){
//     algumMenorQue5 = true; 
//      break;
//    } 
//  }

//  console.log(algumMenorQue5);

// Questão 24 

// let frase = " JavaScript é divertido! ";

// console.log(frase.trim());

// Questão 25 

// let numero = 7;

// if(numero > 10){
//     console.log("Maior que 10")
// } else {
//     console.log("Menor que 10")
// };

// Questão 26 

// let palavras = ["Eu", "amo", "JavaScript"];
// let palavra = palavras.join(" ");

// console.log(palavra);

// Questão 27 

// let palavra = "JavaScript" ;
// let palavras = palavra.split(``);

// console.log(palavras);

// Questão 28 

// let numero = 25;

// if(numero > 10 && numero < 50){
//     console.log("Dentro do intervalo")
// } else{
//     console.log("Fora do intervalo")
// }; 

// Questão 29 

// let numeros = [2, 4, 6]; 

// let result = numeros.map(function(numero){
//     return numero * 3;
// });

// console.log(result);

// Questão 30 

// let str1 = "João";
// let str2 = "joão";

// let result = str1 === str2 ? "False" : "True";

// console.log(result);

// Questão 31 

// let nomes = ["Pedro", "Maria", "José"]; 
// nomes.unshift("Ana");

// console.log(nomes);

// Questão 32 

// let cidades = ["Natal", "Recife", "Fortaleza"];
// cidades.pop();

// console.log(cidades);

// Questão 33 

// let numero = -8;

// if(numero < 0 ){
//     console.log("Numero negativo");
// } else{
//     console.log("Numero positivo");
// };

// Questão 34 

// let nome = "JavaScript"
// let nomeMaiusculo = nome.toUpperCase() 
// let nomeMinusculo = nomeMaiusculo.toLowerCase()

// console.log(nomeMinusculo); 

// Questão 35 

// let numeros = [2, 4, 6, 8];

// let result = numeros.map(function(numero){
//     return numero * 2;
// });

// console.log(result);

// Questão 36 

// let texto = "JavaScript é divertido"; 
// let textos = texto.split(' ');
// let junta = textos.join("");

// console.log(junta); 

// Questão 37 

// let numero = 16 
// let resultado = Math.sqrt(numero);

// console.log(resultado);

// Questão 38 

// let itens = [];

// if(itens.length == 0){
//     console.log("True")
// } else {
//     console.log("False")
// };

// Questão 39 

// let numero = 5;

// function fatorial(n){
// if (n === 0 || n === 1){
//     return 1
// }else {
//     return n * fatorial(n - 1);
// };
// }

// console.log(fatorial(numero));

// Questão 40 

// let valores = [1, 2, 3, 4, 5]; 
// let valor = valores.map(function(numero){
//     return numero * 2;
// }) 
// let soma = valor.reduce(function(numero, acumulador){
//     return numero + acumulador;
// })

// console.log(soma);

// Questão 41 

// let texto = "JavaScript";
// let separar = texto.split(``);

// console.log(separar);

// Questão 42 

// let parte1 = "Olá, ";
// let parte2 = "mundo!";
// let juntar = parte1.concat(parte2);

// console.log(juntar);

// Questão 43 

// let numeroStr = "25";

// console.log(parseInt(numeroStr));

// Questão 44 

// let cores = ["Vermelho", "Verde", "Azul"];
// cores.splice(1,1);

// console.log(cores);

// Questão 45 

// let palavra = "JavaScript";

// console.log(palavra.length);

// Questão 46 

// let a = 5;
// let b = 7; 
// let soma = a + b; 
// if(soma > 30){
//     console.log("Maior que 30")
// } else {
//     console.log("Menor ou igual a 30")
// };

// Questão 47 

// let palavra = "JavaScript";
// let dividir = palavra.split(``);
// let inverter = dividir.reverse();

// console.log(inverter);

// Questão 48 

// let cidades = ["Natal", "Recife", "Fortaleza"];
// cidades.shift();

// console.log(cidades);

// Questão 49 

// let numero = 9;
// if(numero % 2 === 0){
//     console.log("O numero é par")
// } else{
//     console.log("O numero é impar")
// };

// Questão 50 

// let numeros = [1, 2, 3, 4, 5];
// let resultado = numeros.map(function(numero){
//     return numero * 10;
// })

// console.log(resultado);