//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

class Livro {
    private _titulo: string;
    private _autor: string;
    private _paginas: number;
    private _lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean){
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
        this._lido = lido;
    }

    marcarComoLido() {
        this._lido = true;
        console.log(`O livro "${this._titulo}" foi marcado como lido!`);
    }

    statusLivro(): void {
        if(this._lido === false) {
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

console.log(livro1)
console.log(livro2)