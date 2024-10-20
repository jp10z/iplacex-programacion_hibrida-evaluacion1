import { FiguraGeometrica } from "./figura-geometrica";

export abstract class TrianguloEscaleno extends FiguraGeometrica{

    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA:number, ladoB:number, ladoC:number){
        // se llama al constructor del padre indicando el nombre de la figura
        super("Triangulo");
        // se setean valores de los lados
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    override calcularPerimetro(): number {
        // se calcula sumando todos los lados
        return this.ladoA + this.ladoB + this.ladoC;
    }

}