import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonButton, IonImg } from '@ionic/angular/standalone';
import { Circulo } from '../../modelo/circulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, IonImg, IonButton, 
    ReactiveFormsModule, IonList, IonItem, IonInput,
    IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard
  ]
})
export class CirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  textoResultado: string | null = null;

  // formulario reactivo
  formulario = new FormGroup({
    radio: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  get radio() {
    // retorna el valor de radio del formulario, si no tiene valor retorna 0
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
    const perimetroResultado = circulo.calcularPerimetro().toFixed(2);
    this.textoResultado = `El perímetro es ${perimetroResultado} cm`
  }

}
