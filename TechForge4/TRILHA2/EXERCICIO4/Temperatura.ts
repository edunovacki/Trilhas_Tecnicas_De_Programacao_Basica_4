//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura {
    private _valor: number;

    constructor(valor: number) {
        this._valor = valor;
    }

    public get valor(): number {
        return this._valor;
    }

    public set valor(novoValor: number) {
        if (novoValor < -273.15) {
            console.log("Erro: A temperatura não pode ser menor que o zero absoluto (-273.15°C).");
            return;
        }
        this._valor = novoValor;
    }

    converterParaFahrenheit(): number {
        return (this._valor * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this._valor + 273.15;
    }
}

const temp = new Temperatura(25);

console.log(temp.valor);
console.log(temp.converterParaFahrenheit());
console.log(temp.converterParaKelvin());

temp.valor = -300;
console.log(temp.valor);