export abstract class FiguraGeometrica{

    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    // método que deberán sobreescribir sus clases hijas
    abstract calcularPerimetro():number;

}