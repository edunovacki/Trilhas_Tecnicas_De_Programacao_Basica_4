//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.

abstract class Animal {
    protected energia: number;

    constructor(energia: number){
        this.energia = energia;
    }

    public abstract statusEnergia(): void;

    public abstract comer(): void;
}

class Leao extends Animal {
    private cacaBemSucedida: boolean = false
    constructor(energia: number){
        super(energia);
        this.energia = energia;
    }

    public statusEnergia(){
        console.log(`A energia do leão está em ${this.energia}%.`);
    }

    public cacar(){
        if(this.energia < 10){
            console.log("O leão não consegue caçar devido à falta de energia, é necessário no mínimo 10% de energia para caçar.")
            this.cacaBemSucedida = false;
            return;
        }
        console.log("O leão está caçando...")
        this.energia -= 10;

        this.cacaBemSucedida = true;
        console.log("O leão caçou com sucesso!");
    }

    public comer(){
        if(!this.cacaBemSucedida) {
            console.log("O leão precisa caçar antes de comer");
            return;
        }
        console.log("O leão está comendo a caça...");
        this.energia += 25;
        this.cacaBemSucedida = false;
    }
}

class Passaro extends Animal {
    public statusEnergia(){
        console.log(`A energia do pássaro está em ${this.energia}%.`);
    }

    public comer(){
        console.log("O pássaro está comendo sementes...");
        this.energia += 10;
    }
}

const leao = new Leao(40);
const passaro = new Passaro(30);

leao.statusEnergia();
leao.cacar();
leao.comer();
leao.statusEnergia();

passaro.statusEnergia();
passaro.comer();
passaro.statusEnergia();