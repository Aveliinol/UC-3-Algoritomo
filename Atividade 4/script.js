// Questão 1 : Crie uma função que, dada uma lista de idades, use um loop for para verificar se
// todas as pessoas têm 18 anos ou mais. Se sim, retorne "Todos podem entrar". Se não, retorne
// "Alguém não pode entrar"

    // function verificarIdade(listaDeIdade) {
    //     for (let i = 0; i < listaDeIdade.length; i++){
    //         if (listaDeIdade[i] < 18 ){
    //             return "Alguém não pode entrar";
    //         } else { 
    //             return 'Todos podem entrar'
    //         }}}
    // const idade= [15,22,19,20,30,28,26];
    // console.log(verificarIdade(idade));

    // Questão 2 : Crie uma função que use um loop while para contar quantos números pares
    // existem entre 1 e 50. Retorne esse número.

    // function numeros(pares){
    //     let i = 1 
    //     let contador = 0 
    //  while (i <= 50){
    // if (i % 2==0){
    //  contador = contador+1 
    // }
    // i++
    //  } 
    //  return contador
    //  } 
    // console.log (numeros())

    // Questão 3: Use switch case para classificar uma cor baseada em um número de 1 a 3. Se 1,
    // classifique como "Cor Clara". Se 2, "Cor Média". Se 3, "Cor Escura". Qualquer outro número
    // deve retornar "Cor Desconhecida".
    
    // let cor 
    // cor = '2'

    // switch(cor){
    //     case '1':
    //         console.log ("Cor Clara")
    //         break;
    //     case '2': 
    //     console.log ("Cor Média")
    //         break;
    //     case '3':
    //     console.log ("Cor Escura")
    //         break;
    //     default:
    //         console.log ("Cor Desconhecida")             
    // }
    
//     Questão 4: Crie uma função que use switch case para validar uma senha. Se a senha tiver
// menos de 8 caracteres, retorne "Senha Fraca". Se tiver entre 8 e 12 caracteres, retorne "Senha
// Média". Se tiver mais de 12, retorne "Senha Forte".

// function ValidarSenha(senha){
// const comprimento = senha.length

// switch(true){
//     case (comprimento < 8 ):
//         return 'Senha Fraca'
//     case (comprimento >= 8 && comprimento <= 12 ):
//         return 'Senha Média'
//     case (comprimento > 12):
//         return 'Senha Forte'    
// }}
// console.log( ValidarSenha('473473'))

// Questão 5: Use switch case para classificar uma nota de 0 a 100. Se a nota for maior que 90,
// classifique como "A". Se entre 80 e 89, "B". Se entre 70 e 79, "C". Se entre 60 e 69, "D". Se
// menor que 60, "F"


// function validarNota(nota){

//     switch(true){
//         case (nota > 90):
//             return "A";
//         case (nota > 80 && nota < 89):
//             return "B";
//         case (nota > 70 && nota < 79):
//             return "C";
//         case (nota > 60 && nota < 69):
//             return "D";
//         case (nota < 60):
//             return "F";
// }}
// console.log (validarNota('200'))

// Questão 6: Crie uma função que use um loop for para percorrer de 1 a 100. Se o número for
// divisível por 2, 3 e 5, imprima "FizzBuzzBoom". Se for divisível por 2 e 3, imprima "FizzBuzz".
// Se for divisível por 3 e 5, imprima "BuzzBoom". Se for divisível por 2 e 5, imprima "FizzBoom".
// Se for divisível apenas por 2, 3, ou 5, imprima "Fizz", "Buzz", ou "Boom", respectivamente.
// Caso contrário, imprima o número.

// function exibirLucas(){
// for(let lucas = 1; lucas <= 100; lucas++){
//     if(lucas % 2==0 && lucas % 3==0 && lucas % 5==0){
//         console.log('FizzBuzzBoom')
//     } else if (lucas % 2==0 && lucas % 3==0){
//         console.log('FizzBuzz')
//     } else if (lucas % 3==0 && lucas % 5==0){
//         console.log('FizzBoom')
//     } else if (lucas % 2==0 && lucas % 5==0){
//         console.log ('FizzBoom')
//     } else if (lucas % 2==0){
//         console.log ('Fizz')
//     } else if (lucas % 3==0){
//         console.log('Buzz')
//     } else if (lucas % 5==0){
//         console.log('boom')
//     } else{
//         console.log(lucas)
//     }
// }}
//  exibirLucas()