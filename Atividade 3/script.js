// 1 Crie um loop 'for' que conte de 1 até 10 e exiba cada número

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

//  2 Crie um loop 'while' que conte de 1 até 10 e exiba cade número

// let i = 1;
// while (i <= 10){
//     console.log (i);
//     i++;
// }

//  3 Crie um loop 'for' que some os números de 1 a 5 e exiba a soma total

// let i = 0
// for(a = 1; a <= 5; a++){
//     i= a+i 
// }
// console.log (i)

// 4 Crie um loop 'while' que some os números de 1 a 5 e exiba a soma

// let i = 0;
// let a = 1;
// while(a <= 5 ){
//     i= a+i
//     a++;
// }
// console.log (i)

// 5 Crie um loop 'for' que multiplique os números de 1 a 4 e exiba o resultado

// let i = 1
// for(a = 2; a <= 4; a++){
//     i= a*i
// }
// console.log (i)

// 6 Crie um loop 'while' que multiplique os números de 1 a 4 e exiba o resultado

// let i = 1;
// let a = 2; 
// while(a <= 4){
//     i= a*i
//     a++;
// }
// console.log (i)

// 7 Crie um loop 'for' que percorre os números de 1 a 10 e exibe "Par" se o e "Ímpar" se o número for ímpar

// for(let i=1; i <= 10; i++){
//     if (i % 2 !==0){
//     console.log (i, "Ímpar")    
//     } else{
//         console.log (i, 'Par')
//     }
// }

// 8 Crie um loop 'while' que percorre os números de 1 a 10 e exibe "Par" se o número for par e "Ímpar" se o número for ímpar

// let i = 1;
// while (i <= 10){
//   if (i % 2 ==0){
//     console.log(i, 'ímpar')
//   } else{
//     console.log (i, 'Par')
//   }
//   i++
// }

// 9 Crie um loop for que percorre os números de 1 a 20 e exibe:
// "Fizz" se o número for múltiplo de 3,
// "Buzz" se o número for múltiplo de 5,
// "FizzBuzz" se o número for múltiplo de 3 e 5,
//  Caso contrário, exiba o número.

// for( let i=1; i <= 20; i++){
//     if (i % 3==0 && i % 5==0){
//         console.log ("Fizzbuzz")
//     } else if (i % 3==0){
//         console.log ("Fizz")
//     } else if (i % 5==0){
//         console.log ("buzz")
//     } else {
//         console.log (i)
//     }
// }
// console.log (i)

// 10 Crie uma função que usa um switch para retornar uma mensagem baseada na operação
// passada como argumento:
//  "soma" para adição,
//  "subtração" para subtração,
//  "multiplicação" para multiplicação,
//  "divisão" para divisão.

function escolherOperacao(lucas){
    switch (lucas){
        case 'soma':
            console.log("Você escolheu adição")
            break;
        case 'subtração':
            console.log('Você escolheu subtração')
            break;
        case 'multiplicação':
            console.log('Você escolheu multiplicação')
            break;
        case 'divisão':
            console.log('Você escolheu divisão')
            break;
        default:
            console.log ('Você escolheu nada') 
}  } 
escolherOperacao('divisão')