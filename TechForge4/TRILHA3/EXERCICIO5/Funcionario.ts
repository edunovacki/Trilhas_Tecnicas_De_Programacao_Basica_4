//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    protected _nome: string;
    protected _salario: number;

    constructor(nome: string, salario: number){
        this._salario = salario;
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public get salario(): number {
        return this._salario;
    }

    public abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number){
        super(nome, salario);
    }

    public calcularBonus(){
        return this._salario * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number){
    super(nome, salario);
    }

    public calcularBonus(){
        return this._salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(func => {
        const bonus = func.calcularBonus();
        const salarioFinal = func.salario + bonus;
        console.log(`O salário final do funcionário ${func.nome} é: R$${salarioFinal.toFixed(2)}`);
    })
} 

const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
]

calcularSalarioComBonus(funcionarios);