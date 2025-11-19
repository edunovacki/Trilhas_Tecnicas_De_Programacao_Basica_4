//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract get nome(): string;
}

class Circulo extends FiguraGeometrica {
    private _raio: number;

    constructor(raio: number){
        super();
        this._raio = raio;
    }

    get nome(): string {
        return "Circulo";
    }

    calcularArea(): number {
        return Math.PI * (this._raio ** 2);
    }
}

class Quadrado extends FiguraGeometrica {
    private _lado: number;

    constructor(lado: number){
        super();
        this._lado = lado;
    }

    get nome(): string {
        return "Quadrado";
    }

    calcularArea(): number {
        return this._lado * this._lado;
    }
}

class Triangulo extends FiguraGeometrica{
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number){
        super()
        this._base = base;
        this._altura = altura;
    }

    get nome(): string {
        return "Triangulo";
    }

    calcularArea(): number {
        return (this._base * this._altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        console.log(`Área do ${figura.nome}: ${figura.calcularArea()}`);
    })
}

const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];

imprimirAreas(figuras);