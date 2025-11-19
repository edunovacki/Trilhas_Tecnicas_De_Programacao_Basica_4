"use strict";
//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    _valor;
    constructor(valor) {
        this._valor = valor;
    }
    get valor() {
        return this._valor;
    }
    set valor(novoValor) {
        if (novoValor < -273.15) {
            console.log("Erro: A temperatura não pode ser menor que o zero absoluto (-273.15°C).");
            return;
        }
        this._valor = novoValor;
    }
    converterParaFahrenheit() {
        return (this._valor * 9 / 5) + 32;
    }
    converterParaKelvin() {
        return this._valor + 273.15;
    }
}
const temp = new Temperatura(25);
console.log(temp.valor);
console.log(temp.converterParaFahrenheit());
console.log(temp.converterParaKelvin());
temp.valor = -300;
console.log(temp.valor);
//# sourceMappingURL=Temperatura.js.map