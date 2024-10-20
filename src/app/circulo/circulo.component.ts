import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Circulo } from '../modelo/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, 
    ReactiveFormsModule, IonList, IonItem, IonInput,
    IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard
  ]
})
export class CirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  textoResultado: string = "";

  formulario = new FormGroup({
    radio: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  get radio() {
    return this.formulario.get("radio")?.value ?? 0;
  }

  calcularPerimetro(){
    // validamos formulario
    if (!this.formulario.valid) {
      this.textoResultado = "Error al procesar el cálculo, por favor valide el formulario";
      return;
    }
    // instanciamos circulo y procesamos el calculo
    const circulo = new Circulo(this.radio);
    this.textoResultado = `El perímetro es ${circulo.calcularPerimetro()}`
  }

}
