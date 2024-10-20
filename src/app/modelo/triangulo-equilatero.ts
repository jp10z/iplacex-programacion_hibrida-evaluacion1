import { TrianguloEscaleno } from "./triangulo-escaleno";

export abstract class TrianguloEquilatero extends TrianguloEscaleno{

    constructor(ladoA:number){
        // se llama al constructor del padre pasando el mismo largo en todos sus lados
        super(ladoA, ladoA, ladoA);
    }

}