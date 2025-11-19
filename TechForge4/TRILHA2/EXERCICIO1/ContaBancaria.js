"use strict";
//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    _titular;
    _saldo;
    constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }
    depositarDinheiro(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$${valor}. Saldo atual: R$${this._saldo}`);
    }
    sacarDinheiro(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }
        if (valor > this._saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this._saldo -= valor;
        console.log(`Saque de R$${valor}. Saldo atual: R$${this._saldo}`);
    }
    verSaldo() {
        console.log(`O saldo atual é: ${this._saldo}`);
    }
}
const conta = new ContaBancaria("Eduardo", 1000);
conta.depositarDinheiro(200);
conta.sacarDinheiro(300);
conta.sacarDinheiro(2000);
conta.verSaldo();
//# sourceMappingURL=ContaBancaria.js.map