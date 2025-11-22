"use strict";
//Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
//Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".
Object.defineProperty(exports, "__esModule", { value: true });
class Texto {
    titulo;
    conteudo;
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const texto = new Texto("HarryPotter", "Magia");
console.log(texto.exibir());
//# sourceMappingURL=Documento.js.map