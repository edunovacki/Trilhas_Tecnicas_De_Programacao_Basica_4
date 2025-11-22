"use strict";
//Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
Object.defineProperty(exports, "__esModule", { value: true });
//Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
//MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
//BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 
class GerenciadorDeFavoritos {
}
class GerenciadorDeFilmesFavoritos extends GerenciadorDeFavoritos {
    favoritos = [];
    adicionarAosFavoritos(item) {
        if (!this.favoritos.includes(item)) {
            this.favoritos.push(item);
        }
    }
    getFavoritos() {
        return this.favoritos.sort();
    }
}
class GerenciadorDeLivrosFavoritos extends GerenciadorDeFavoritos {
    favoritos = [];
    adicionarAosFavoritos(item) {
        if (!this.favoritos.includes(item)) {
            this.favoritos.unshift(item);
        }
    }
    getFavoritos() {
        return this.favoritos.sort();
    }
}
const filmes = new GerenciadorDeFilmesFavoritos();
filmes.adicionarAosFavoritos("Interstellar");
filmes.adicionarAosFavoritos("Matrix");
filmes.adicionarAosFavoritos("Matrix");
console.log(filmes.getFavoritos());
const livros = new GerenciadorDeLivrosFavoritos();
livros.adicionarAosFavoritos("Harry Potter");
livros.adicionarAosFavoritos("O Hobbit");
livros.adicionarAosFavoritos("A Guerra dos Tronos");
livros.adicionarAosFavoritos("Harry Potter");
console.log(livros.getFavoritos());
//# sourceMappingURL=FavoriteManager.js.map