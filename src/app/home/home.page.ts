import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonSelect, IonSelectOption 
} from '@ionic/angular/standalone';
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CirculoComponent } from "../circulo/circulo.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSelect, IonSelectOption,
    TrianguloComponent, CirculoComponent
],
})
export class HomePage {
  constructor() {}

  // variable que almacena la figura geometrica seleccionada
  figuraGeometrica: string|undefined = undefined;

  esCirculo(): boolean {
    // retorna si la figura seleccionada es circulo
    return this.figuraGeometrica == "circulo";
  }

  esTriangulo(): boolean {
    // retorna si la figura seleccionada es triangulo
    return this.figuraGeometrica == "triangulo";
  }

  handleFiguraGeometricaChange(event:any){
    // setea la figura geometrica seleccionada en la variable
    this.figuraGeometrica = event.target.value;
  }
}
