// produto.ts

interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirTituloAno(livro: Livro): string {
    return `O livro "${livro.titulo}" foi publicado em ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
};

console.log(exibirTituloAno(livro1));
