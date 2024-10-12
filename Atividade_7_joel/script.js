let livros = [
    {"título": "Dexter", "Quantidade": 9},
    {"titulo": "Harry Potter e a pedra filosofal", "Quantidade": 12},
    {"título": "Grimm", "Quantidade": 5},
    {"título": "One Piece", "Quantidade": 32},
    {"título": "The Bear", "Quantidade": 15}
]
let livro = []

function livrosComEstoqueSuficiente(){
       livros.forEach((lerLivro => {
        if(lerLivro.Quantidade >= 10){
            livro.push(lerLivro);
        }
       }))
 return livro;
 }
console.log(livrosComEstoqueSuficiente());