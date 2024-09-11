// Questão 1

function avaliarDesempenho(vendas, pontualidade){
    if (vendas > 100000 && pontualidade > 95){
        return "Desempenho Exelente";
    } else if (vendas >= 50000 && vendas <= 100000 && pontualidade >= 85 && pontualidade <= 95){
        return "Desempenho Bom";
    } else if (vendas < 50000 || pontualidade < 85){
        return "Desempenho Regular";
    }
}
console.log(avaliarDesempenho(100001, 96));

// Questão 2 

function aprovarBolsa (Desempenho, renda){
    if (Desempenho > 8.5 && renda < 3000){
        return "Aprovar Bolsa Integral"
    } else if (Desempenho >= 7 && Desempenho <= 8.5 && renda >= 3000 && renda <= 6000){
        return 'Aprovar Bolsa Parcial'
    } else if (Desempenho < 7 && renda > 6000){
        return "Não Aprovar Bolsa"
    }
}
console.log(aprovarBolsa(6, 6500));

// Questão 3

function avaliarRisco (IMC, idade){
    if (IMC > 30 && idade > 60){
        return "Risco Alto"
    } else if (IMC >= 25 && IMC <= 30 && idade >= 45 && idade <= 60){
        return "Risco Médio"
    } else if (IMC < 25 && idade < 45){
        return "Risco Baixo"
    }
}
console.log (avaliarRisco(34, 61));

// Questão 4 

function classificarClientes (RendaAnual, historicoDePagamento){
    if (RendaAnual > 100000 && historicoDePagamento == 'Exelente'){
        return "Cliente Prime"
    } else if (RendaAnual >= 50000 && RendaAnual <= 100000 && historicoDePagamento == 'Bom'){
        return "Cliente Padrão"
    } else if (RendaAnual < 50000 && historicoDePagamento == 'Ruim'){
        return 'Cliente Restrito'
    }
}
console.log (classificarClientes(50000, 'Bom'));

// Questão 5 

function classificarProdutos (preco, demanda){
    if (preco > 100 && demanda > 500){
        return "Produto Premium"
    } else if (preco >= 50 && preco <= 100 && demanda >= 200 && demanda <= 500){
        return "Produto Padrão"
    } else if (preco < 50 && demanda < 200){
        return 'Produto Econômico'
    }
}
console.log (classificarProdutos(101, 550));

// Questão 6 

function recrutarCandidatos (experiencia, formacaoAcademica){
    if (experiencia > 10 && formacaoAcademica == 'Doutorado'){
        return 'Posição Sênior'
    } else if (experiencia >= 5 && experiencia <= 10 && formacaoAcademica == 'Mestrado'){
        return 'Posição Plena'
    } else if (experiencia < 5 && formacaoAcademica == 'Graduacao'){
        return 'Posição Júnior'
    }
}
console.log (recrutarCandidatos(11, 'Doutorado'));

// Questão 7 

function avaliarFornecedores(qualidade, entrega){
    if (qualidade == 'Exelente' && entrega < 5){
        return 'Fornecidor A'
    } else if (qualidade == 'Boa' && entrega >= 5 && entrega <= 10){
        return 'Fornecedor B'
    } else if (qualidade == 'Regular' && entrega > 10){
        return 'Fornecedor C'
    }
}
console.log (avaliarFornecedores('Regular', 15));

// Questão 8 

function  classificarProjeto(orcamento, complexidade){
    if (orcamento > 1000000 && complexidade == 'Alta'){
        return 'Projeto Estratégico'
    } else if (orcamento >= 500000 && orcamento <= 1000000 && complexidade == 'Média'){
        return 'Projeto Importante'
    } else if (orcamento < 500000 && complexidade == 'Baixa'){
        return 'Projeto Secundário'
    }
}
console.log (classificarProjeto(780000, 'Média'));

// Questão 9 

function avaliarCurso (avaliacao, taxaDeConclucao){
    if (avaliacao > 4.5 && taxaDeConclucao > 90){
        return 'Curso Excelente'
    } else if (avaliacao >= 3.5 && avaliacao <= 4.5 && taxaDeConclucao >= 75 && taxaDeConclucao <= 90){
        return 'Curso bom'
    } else if (avaliacao < 3.5 && taxaDeConclucao < 75){
        return 'Curso Regular'
    }
}
console.log (avaliarCurso(2.4, 53));

// Questão 10 

function classificarFilmes(avaliacaoDoUsuario, vizualizacao){
    if (avaliacaoDoUsuario > 4.5 && vizualizacao > 1000000){
        return 'Filme Blockbuster'
    } else if (avaliacaoDoUsuario >= 3.5 && avaliacaoDoUsuario <= 4.5 && vizualizacao >= 500000 && vizualizacao <= 1000000){
        return 'Filme Popular'
    } else if (avaliacaoDoUsuario < 3.5 && vizualizacao < 500000){
        return 'Filme Nicho'
    }
}
console.log(classificarFilmes(5.0, 10000000));