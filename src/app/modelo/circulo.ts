import { FiguraGeometrica } from "./figura-geometrica"

export abstract class Circulo extends FiguraGeometrica{

    radio: number;

    constructor(radio:number){
        // se llama al constructor del padre indicando el nombre de la figura
        super("Circulo");
        // se setea el valor del radio
        this.radio = radio;
    }

    override calcularPerimetro(): number {
        // se calcula multiplicando 2 x Pi x radio
        return 2 * Math.PI * this.radio;
    }

}