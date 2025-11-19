"use strict";
//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    _nome;
    _preco;
    _quantidade;
    constructor(nome, preco, quantidade) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }
    calculoValorTotalEstoque() {
        if (this._quantidade <= 0 || this._preco <= 0) {
            console.log("A quantidade e o preço do produto deve ser maior que 0.");
            return;
        }
        const valorEstoque = (this._quantidade * this._preco);
        console.log(`O valor total dos produtos em estoque é R$${valorEstoque}`);
    }
}
const produto1 = new Produto("Chocolate", 1000, 10);
console.log(produto1);
produto1.calculoValorTotalEstoque();
//# sourceMappingURL=Produto.js.map