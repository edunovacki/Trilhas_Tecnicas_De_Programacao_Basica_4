//Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().

class Veiculo {
    public nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    public mover() {
        console.log(`O(A) ${this.nome} está se movendo.`);
    }
}

class Carro extends Veiculo {
    constructor(nome: string){
        super(nome);
    }

    public mover() {
        console.log(`O(A) ${this.nome} está dirigindo.`);
    }
}

class Bicicleta extends Veiculo {
    constructor(nome: string) {
        super(nome);
    }

    public mover() {
        console.log(`O(A) ${this.nome} está pedalando.`);
    }
}

const veiculo = new Veiculo("Trem");
veiculo.mover();

const carro = new Carro("Jetta");
carro.mover();

const bicicleta = new Bicicleta("Absolute");
bicicleta.mover();