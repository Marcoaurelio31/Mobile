<<<<<<< HEAD
// interface.ts
function verificarDisponibilidade(produto) {
    if (produto.emEstoque) {
        return "O produto ".concat(produto.nome, " est\u00E1 dispon\u00EDvel por R$").concat(produto.preco.toFixed(2), ".");
    }
    else {
        return "O produto ".concat(produto.nome, " n\u00E3o est\u00E1 dispon\u00EDvel no momento.");
    }
}
var produto1 = {
    nome: "Cadeira",
    preco: 150.00,
    emEstoque: true
};
console.log(verificarDisponibilidade(produto1));
=======
function encontrarMaiorNumero(numeros) {
    if (numeros.length === 0) {
        throw new Error("O array está vazio");
    }
    
    let maiorNumero = numeros[0];
    

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    
    return maiorNumero;
}

const numeros = [9, 3, 18, 25, 4];
console.log("O maior número é:", encontrarMaiorNumero(numeros));
>>>>>>> bbdacb34429ddd2a032c123ce7ad74f429b9a6e7
