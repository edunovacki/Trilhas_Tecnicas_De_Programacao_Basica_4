"use strict";
//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    _titulo;
    _autor;
    _paginas;
    _lido;
    constructor(titulo, autor, paginas, lido) {
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
        this._lido = lido;
    }
    marcarComoLido() {
        this._lido = true;
        console.log(`O livro "${this._titulo}" foi marcado como lido!`);
    }
    statusLivro() {
        if (this._lido === false) {
            console.log(`O livro "${this._titulo}" não foi lido ainda.`);
            return;
        }
        console.log(`O livro "${this._titulo}" já foi lido!`);
    }
}
const livro1 = new Livro("Harry Potter", "J. K. Rowling", 350, false);
livro1.statusLivro();
livro1.marcarComoLido();
livro1.statusLivro();
const livro2 = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 1202, false);
livro2.statusLivro();
console.log(livro1);
console.log(livro2);
//# sourceMappingURL=Livro.js.map