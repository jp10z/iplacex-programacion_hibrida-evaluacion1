import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, IonList, IonItem, IonInput,
    IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard
  ]
})
export class TrianguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  formulario = new FormGroup({
    ladoA: new FormControl(undefined, [Validators.required]),
    ladoB: new FormControl(undefined, [Validators.required]),
    ladoC: new FormControl(undefined, [Validators.required])
  })

}
