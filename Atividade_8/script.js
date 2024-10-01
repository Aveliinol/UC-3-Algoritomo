// Questão 1 

// let numeros = [34, 7, 23, 32, 5, 62];
// numeros.push(9, 12);
// numeros.unshift(1);
// numeros.sort((a, b) => a - b);
// numeros.reverse();

// console.log(numeros);

// Questão 2
 
// let saudacao = "Olá ";
// let nome = "Mundo"; 
// let msg = saudacao.concat(nome); 
// let msgM = msg.toUpperCase();
// let parte = msgM.slice(4);

// console.log(parte);

// Questão 3 

// let valores = [10, 25, 30, 45, 50, 60];
// let valor = valores.filter(function(numero){
//     return numero > 30; 
// })
// let soma = valor.reduce(function(acumulador, numeros){
//     return acumulador + numeros;
// }); 

// console.log(isNaN(soma));

// Questão 4 

// let numeros = [1, 2, 3, 4, 5];
// let multiplicacao = numeros.map(
// function(numero){
//     return numero * 2; 
// });
// let soma = multiplicacao.reduce(function(acumulador, numeros){
//         return acumulador + numeros;
// });

// console.log(soma);

// Questão 5 

// let frase = "A programação é divertida e desafiadora.";
// // console.log(frase.length);
// let maiusculo = frase.toUpperCase();
// let frases = maiusculo.split(" ");
// let frasesM = frases.join("-");

// console.log(frasesM);

// Questão 6 

// let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
// frutas.splice(2, 1, "Abacaxi");
// frutas.splice(0, 3);
// frutas.push("Melancia");

// console.log(frutas);

// Questão 7 

// let nomes = ["Ana", "Carlos", "João", "Maria"];
// // let indice = nomes.indexOf('Carlos');
// nomes.splice(2, 1, "José");
// nomes.unshift("Fernanda");
// nomes.push("Rafael");
// let indice = nomes.indexOf('Carlos');
// console.log(indice);
// console.log(nomes);

// Questão 8 

// let precos = [15.5, 10.0, 20.75, 30.0, 8.0]; 
// let preco = precos.map(
//     function(numero){
//         return numero * 1.1; 
//     });
//     let valor = preco.filter(function(numeros){
//             return numeros > 20; 
//         })
//  let soma = valor.reduce(function(acumulador, numeros){
//           return acumulador + numeros;
//            });

// console.log(soma);  

// Questão 9
// Antonio falou para pula essa questão 

// Questão 10 

// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
// let status = media >= 7 ? "Aprovado" : "Reprovado";
// console.log(media);
// console.log(status);

// Questão 11 

// let cidade = "São Paulo";
// let clima = "ensolarado";
// let frase = `Hoje em ${cidade} está ${clima}.`;
// let novaPalavra = frase.replace("ensolarado", "chuvoso");

// console.log(novaPalavra);
// console.log(frase);

// Questão 12 

// let texto = "javascript é incrível"; 
// let textos = texto.split(" ");
// textos.reverse();
// let textosM = textos.map( textoM => {
//     return textoM.charAt(0).toUpperCase() + textoM.slice(1);
// });
// let resultado = textosM.join(" ");

// console.log(resultado);

// Questão 13 

// let mes = 6

// switch(mes){
//     case 1: 
//       console.log("Janeiro");
//         break;  
//     case 2:
//       console.log("Fevereiro");
//         break;
//     case 3: 
//       console.log("Março");
//       break;
//     case 4: 
//       console.log("Abril");
//         break;
//     case 5: 
//        console.log("Maio");
//          break;
//     case 6: 
//        console.log("Junho");
//         break;
//     case 7: 
//        console.log("Julho");
//         break;
//     case 8: 
//       console.log("Agosto");
//         break;
//     case 9:
//        console.log("Setembro");
//         break;
//     case 10: 
//         console.log("Outubro");
//            break;
//     case 11:
//          console.log("Novembro");
//           break;
//     case 12: 
//        console.log("Dezembro");
//          break;                                               
// } 

// function verificarMes(){
//     if(mes >= 1 && mes <= 6){
//         console.log("Primeiro semestre")
//     } else {
//         console.log("Segundo semestre")
//     }
// }
// verificarMes();

// Questão 14 

// let numeroStr = "45.67";
// console.log(parseFloat(numeroStr));
// console.log(Math.floor(numeroStr));
// console.log(Math.ceil(numeroStr));

// Questão 15

// let palavra = "programador";

// console.log(palavra.charAt(3));
// console.log(palavra.indexOf("a"));
// let palavras = palavra.slice(0, 5);
// console.log(palavras);

// Questão 16 

let frase = "Estudar programação é ótimo!";
let frases = 0;
for(let i = 0; i < frase.length; i++){
    if (frase.charAt(i) == "a"){
        frases++;
    }
}
console.log(frases);