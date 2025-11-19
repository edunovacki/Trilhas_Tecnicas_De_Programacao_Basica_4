//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria {
    private _titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number){
        this._titular = titular;
        this._saldo = saldo;
    }

    depositarDinheiro(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$${valor}. Saldo atual: R$${this._saldo}`);
    }

    sacarDinheiro(valor: number): void {
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
