"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}
let pessoa = new Pessoa("Eduardo", 19);
console.log(pessoa.apresentar());
//# sourceMappingURL=Heran%C3%A7a.js.map