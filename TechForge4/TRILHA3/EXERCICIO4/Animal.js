"use strict";
//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    energia;
    constructor(energia) {
        this.energia = energia;
    }
}
class Leao extends Animal {
    cacaBemSucedida = false;
    constructor(energia) {
        super(energia);
        this.energia = energia;
    }
    statusEnergia() {
        console.log(`A energia do leão está em ${this.energia}%.`);
    }
    cacar() {
        if (this.energia < 10) {
            console.log("O leão não consegue caçar devido à falta de energia, é necessário no mínimo 10% de energia para caçar.");
            this.cacaBemSucedida = false;
            return;
        }
        console.log("O leão está caçando...");
        this.energia -= 10;
        this.cacaBemSucedida = true;
        console.log("O leão caçou com sucesso!");
    }
    comer() {
        if (!this.cacaBemSucedida) {
            console.log("O leão precisa caçar antes de comer");
            return;
        }
        console.log("O leão está comendo a caça...");
        this.energia += 25;
        this.cacaBemSucedida = false;
    }
}
class Passaro extends Animal {
    statusEnergia() {
        console.log(`A energia do pássaro está em ${this.energia}%.`);
    }
    comer() {
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
//# sourceMappingURL=Animal.js.map