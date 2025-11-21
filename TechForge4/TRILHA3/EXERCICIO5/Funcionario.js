"use strict";
//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    _nome;
    _salario;
    constructor(nome, salario) {
        this._salario = salario;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    get salario() {
        return this._salario;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }
    calcularBonus() {
        return this._salario * 0.10;
    }
}
class Operario extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }
    calcularBonus() {
        return this._salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(func => {
        const bonus = func.calcularBonus();
        const salarioFinal = func.salario + bonus;
        console.log(`O salário final do funcionário ${func.nome} é: R$${salarioFinal.toFixed(2)}`);
    });
}
const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
];
calcularSalarioComBonus(funcionarios);
//# sourceMappingURL=Funcionario.js.map