// produto.ts
function exibirTituloAno(livro) {
    return "O livro \"".concat(livro.titulo, "\" foi publicado em ").concat(livro.anoPublicacao, ".");
}
var livro1 = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
};
console.log(exibirTituloAno(livro1));
