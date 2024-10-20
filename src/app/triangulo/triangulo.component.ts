import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../modelo/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, 
    ReactiveFormsModule, IonList, IonItem, IonInput,
    IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard
  ]
})
export class TrianguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  textoResultado: string = "";

  formulario = new FormGroup({
    ladoA: new FormControl(0, [Validators.required]),
    ladoB: new FormControl(0, [Validators.required]),
    ladoC: new FormControl(0, [Validators.required])
  })

  get ladoA() {
    return this.formulario.get("ladoA")?.value ?? 0;
  }

  get ladoB() {
    return this.formulario.get("ladoB")?.value ?? 0;
  }

  get ladoC() {
    return this.formulario.get("ladoC")?.value ?? 0;
  }

  calcularPerimetro(){
    // validamos formulario
    if (!this.formulario.valid) {
      this.textoResultado = "Error al procesar el cálculo, por favor valide el formulario";
      return;
    }
    // instanciamos circulo y procesamos el calculo
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.textoResultado = `El perímetro es ${triangulo.calcularPerimetro()}`
  }

}
