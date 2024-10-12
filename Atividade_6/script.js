// Questão 1

// let frutas = ["maçã", "banana", "laranja"];
// frutas.push('Uva');
// const primeiro = frutas.shift();
// console.log (frutas)

// function verificarFruta(fruta){
//     if (frutas.includes(fruta)){
//         console.log('Fruta encontrada')
//     } else {
//         console.log('Fruta não encontrada')
//     }
// }
//     verificarFruta('banana')
   
// Questão 2 

// function calcular(a,b,operacao){
//     if(operacao == 'soma'){
//         return a+b;
//     } else if (operacao == 'subtração'){
//         return a-b;
//     } else if (operacao == 'divisão'){
//         return a/b; 
//     } else if (operacao == 'multiplicação'){
//         return a*b;
//     } else {
//         return 'Resuldado invalido'
//     }
// }
// console.log(calcular(10,2,'divisão'))
// Questão 3

// let numeros = [1, 2, 3, 4, 5];

// let numerosAumentados = [];

// for(let i = 0; i <5; i++){
// let cinco =  numeros[i] + 5;
//    numerosAumentados.push(cinco); 
// } 
// console.log(numerosAumentados);

// Questão 4 

// function classificarNota(nota){
//  switch(true){
//     case (nota >= 7):
//         return 'Aprovado';
//     case (nota < 7):
//         return 'Reprovado';    
    
// }}
// console.log(classificarNota(8));
// console.log(classificarNota(5));

// Questão 5

// let numero = [5, 10, 15, 20]

// function verificarNumero(){
//     for(i = 0; i < numero.length; i++){
//         if (numero[i] < 10){
//             console.log ('Menor que 10')
//         } else if (numero[i] >= 10 && numero[i] <= 20){
//             console.log('Entre 10 e 20')
//         } else if (numero[i] > 20){
//             console.log ('Maior que 20')
//         }
//     } 
// }
// verificarNumero()

// Questão 6 

// let idade = 64; 

//     if(idade >= 18 && idade < 65){
//         console.log('Adulto');
//     } else{
//         console.log('Não Adulto')
//     }
//      let idades = idade >= 18 && idade < 65 ? "Adulto" : "Não Adulto";
//      console.log(idades)

// Questão 7

//  function fizzBuzz(n){

//     const Resultado = []

//    for(let i = 1; i <= n; i++){
//     if( i % 3==0 && i % 5==0){
//       Resultado.push('FizzBuzz');
//     } else if (i % 5==0){
//       Resultado.push('Buzz');
//     } else if (i % 3==0){
//       Resultado.push('Fizz');
//     } else {
//       Resultado.push(i);
//     }
//    }
//    return Resultado;
//  }
// console.log(fizzBuzz(5));

// Questão 8 

// let tarefas = ['estudar', 'limpar', 'comprar'];

// tarefas.splice(1, 0, 'execitar');
// tarefas.splice(3)

// console.log(tarefas.length);
// console.log(tarefas);

// Questão 9 

// function calcularMedia(a, b){
//     return (a + b) / 2; 
// }

// let media = calcularMedia(9, 7); 

// console.log(media);

// Questão 10 

// let valores = [5, 10, 15, 20];

// let valoresDivididos = [];

// let  I = 0;

// while(I < 4){
//     let valor = valores[I] / 2;
//  valoresDivididos.push(valor);
//  I++
// } 
// console.log(valoresDivididos);

// Questão 11 

// const a = parseFloat(prompt('Digite um número'));

// const b = parseFloat(prompt('Digite um número'));

// function compararSoma(a, b){
//     let soma = a + b;  
//   if(soma > 20){
//     return 'A soma deu maior que 20';
//   }  else {
//     return 'A soma deu menor que 20';
//   }
// }

// alert(compararSoma(a, b));

// Questão 12

// let a = parseInt(prompt("Digite um número"));

// let numero = [];
// let msg;
// let numeros;
   
//  for(let i = 1; i <= a; i++){
//     numeros = numero.push(i);

//     if(numeros % 3==0){
//         msg =  "É multiplo por 3"
//     }else {
//         msg = "Não é multiplo por 3"
//     }
//     alert(${numeros}, ${msg});
// } 

// Questão 12+1 

// let a = parseInt(prompt("Digite um número"));

// let quadrado 
// let numero = [];
// let numeros 

//   for(let i = 1; i <= a; i++){
//     numeros = numero.push(i)
   
//  quadrado = numeros * numeros;  

//     alert(${numeros} ao quadrado é ${quadrado})
//   }

// Questão 14 

// function verificaValor(){
//     let valor = parseInt(prompt("Digite um número"));

//    if (valor > 0 ){
//     alert(${valor} é positivo);
//    } else if (valor < 0 ){
//     alert(${valor} é negativo);
//    } else {
//     alert(${valor} é zero)
//    }
// }
// verificaValor() 

// Questão 15 

// let a = parseInt(prompt("Digite um número"));

// let numero = [];
// let msg;
// let numeros;
   
//  for(let i = 1; i <= a; i++){
//     numeros = numero.push(i);

//     if(numeros % 2==0){
//         msg =  "É par"
//     }else {
//         msg = "É impar"
//     }
//     alert(${numeros}, ${msg});
// } 

// Questão 16 

// function operacaoMatematica(){
// let a = parseInt(prompt("Digite um número"));
// let b = parseInt(prompt("Digite um número"));
// let operacao = prompt("Digite uma operação");
// let resultado;

//   if(operacao == "soma"){
//     resultado = a + b;
//   } else if(operacao == "multiplicação"){
//     resultado = a * b;
//   } else if(operacao == "subtração"){
//      resultado = a - b;
//   } else if(operacao == "divisão"){
//     resultado = a / b;
//   }
//   alert(resultado);
// }
//  operacaoMatematica();

// Questão 17

// function verificarParidade(){
//     let numero = parseInt(prompt("Digite um número"));
//     let msg;
    
//    if(numero % 2 == 0){
//     msg = "É par"
//    } else{
//     msg = "Não é par"
//    }
//     alert(${numero} ${msg})
// }
//    verificarParidade()

// Questão 18 

// let a = parseInt(prompt("Digite um número"));
// let numero = [];
// let numeros; 
// let msg;

//   for( let i = 1; i <= a; i++){
//     numeros = numero.push(i);
//    if(numeros > 10 ){
//      msg ="É maior que 10"
//    } else if(numeros < 10){
//      msg = "É menor que 10"
//    } 
//    alert(${numeros}, ${msg})
//   }