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
// let eNumero = !isNaN(soma)

// console.log(eNumero);
// console.log(valor)
// console.log(soma)

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

// let frase = "Estudar programação é ótimo!";
// let frases = 0;
// for(let i = 0; i < frase.length; i++){
//     if (frase.charAt(i) == "a"){
//         frases++;
//     }
// }
// console.log(frases);

// Questão 17 

// let letras = ["a", "b", "c", "d", "e"];
// letras.reverse();
// let letra = letras.join(",");

// console.log(letra);

// Questão 18 

// let numeros = [5, 12, 8, 130, 44];
// let numeroMaior = numeros.filter(function(numero){
//     return numero > 10;
// });
// let soma = numeros.reduce(function(acumulador, numero){
//     return acumulador + numero; 
// });
// if (numeros.length == 5) {
//     console.log("Tem 5 elementos")
// }else{
//     console.log("Não tem 5 elementos")
// }

// console.log(numeroMaior);
// console.log(soma);

// Questão 19 

// let nome = "Alice";
// let nomeMinusculo = nome.toLocaleLowerCase();
// let reconhecimento = nomeMinusculo == "alice" ?  "Nome Reconhecido" : "Nome não Reconhecido"

// console.log(nomeMinusculo);
// console.log(reconhecimento);

// Questão 20 

// let numeros = [];
// for (let i = 0; i < 5; i++) {
//     numeros.push(Math.floor(Math.random() * 21));
// }

// console.log(numeros);

// Questão 21 

// let frase = "Aprender JavaScript é divertido e recompensador";
// let palavras = frase.split(' ');
// let numPalavras = palavras.length;
// let maisDe5Palavras = numPalavras > 5; 

// console.log(palavras);
// console.log(numPalavras);
// console.log(maisDe5Palavras);

// Questão 22 

// let usuario = prompt("Qual é o seu nome?");
// let comfirmar = comfirm(`Seu nome é ${usuario}?`);
// if (confirmar){
//     alert(`Olá ${usuario}!`);
// }


// Questão 23 

// let texto = "JavaScript"; 
// let contadorA = 0;
// for (let i = 0; i < texto.length; i++){
//     if(texto[i] === "a") contadorA++;
// }

// console.log(contadorA);

// Questão 24 

// let cores = ["Vermelho", "Verde", "Azul"]; 
// cores.push("Amarelo");
// cores.splice(1,1);
// cores.unshift("Roxo");

// console.log(cores);

// Questão 25 

// let str1 = "casa";
// let str2 = "CASA";

// if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log("iguais");
// };
// if (str1.toUpperCase() === str2.toUpperCase()) {
//     console.log("iguais");
// };

// Questão 26 

// let array = [];
// for(let i = 0; i < 5; i++){
//     array.push(Math.floor(Math.random() * 51 ))
// }; 

// let ordem = array.sort((a, b) => a - b);
// let decrescente = ordem.reverse();

// console.log(decrescente);

// Questão 27 

// let carros = [
//     {marca: "Honda",modelo: "Civic",ano: 2008}, 
//     {marca: "Nissan",modelo: "Skyline",ano: 2002 },
//     {marca: "Porsche",modelo: "911 spyder",ano: 2024},
//     {marca: "Fiat",modelo: "Uno", ano: 2003},
//     {marca: "Mitsubishi",modelo: "Lancer",ano: 2024}
// ]

// let filtro = carros.filter(function(carro){
//     return carro.marca === "Nissan"
// });
// let modelos = filtro.map(function(carro){
//     return carro.modelo
// });

// console.log(filtro);
// console.log(modelos);

// Questão 28

// let animais = ["Cachorro", "Gato", "Leão", "Tigre"];
// animais.splice(2, 1, "Panda");
// animais.splice(1, 0, "Coelho");

// console.log(animais);

// Questão 29 

// let numeros = [10, 5, 15, 7, 20]; 
// let ordem = numeros.sort((a, b) => a - b);
// ordem.unshift(4);

// if(ordem.length === 6){
//     console.log("Esse array tem 6 elementos")
// } else{
//     console.log("Esse array não tem 6 elementos")
// };

// console.log(ordem);

// Questão 30 

// let part1 = "Aprender";
// let part2 = "Programação";
// let juntar = part1.concat(part2);
// let result = juntar.split('').reverse().join('.');

// console.log(result);