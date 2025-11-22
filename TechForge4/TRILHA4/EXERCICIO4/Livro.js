"use strict";
//Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
//Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.
//Dica: pesquisar pelo método filter
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    livros = [];
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Harry Potter", autor: "JK Rowling", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "Tolkien", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Narnia", autor: "C. S. Lewis", disponivel: true });
console.log(biblioteca.buscarLivrosDisponiveis());
//# sourceMappingURL=Livro.js.map