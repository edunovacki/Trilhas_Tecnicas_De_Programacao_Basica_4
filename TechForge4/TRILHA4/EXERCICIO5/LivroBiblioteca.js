"use strict";
//Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
//Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
//Implemente os seguintes métodos:
//filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
//buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
//obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.
Object.defineProperty(exports, "__esModule", { value: true });
class BibliotecaGestao {
    livros = [];
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor === autor);
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
const biblioteca = new BibliotecaGestao();
biblioteca.adicionarLivro({ titulo: "Zelda", autor: "A", genero: "Aventura", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Mario", autor: "B", genero: "Plataforma", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Aladin", autor: "C", genero: "Aventura", disponivel: false });
console.log(biblioteca.obterLivrosDisponiveisOrdenados());
//# sourceMappingURL=LivroBiblioteca.js.map