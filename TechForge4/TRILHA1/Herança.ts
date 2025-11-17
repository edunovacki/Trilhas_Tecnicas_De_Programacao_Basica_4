class Pessoa {
    nome: string;
    idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

let pessoa = new Pessoa("Eduardo", 19);
console.log(pessoa.apresentar());