"use strict";
//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    _raio;
    constructor(raio) {
        super();
        this._raio = raio;
    }
    get nome() {
        return "Circulo";
    }
    calcularArea() {
        return Math.PI * (this._raio ** 2);
    }
}
class Quadrado extends FiguraGeometrica {
    _lado;
    constructor(lado) {
        super();
        this._lado = lado;
    }
    get nome() {
        return "Quadrado";
    }
    calcularArea() {
        return this._lado * this._lado;
    }
}
class Triangulo extends FiguraGeometrica {
    _base;
    _altura;
    constructor(base, altura) {
        super();
        this._base = base;
        this._altura = altura;
    }
    get nome() {
        return "Triangulo";
    }
    calcularArea() {
        return (this._base * this._altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Área do ${figura.nome}: ${figura.calcularArea()}`);
    });
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];
imprimirAreas(figuras);
//# sourceMappingURL=FiguraGeometrica.js.map