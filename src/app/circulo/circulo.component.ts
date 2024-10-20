import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, IonList, IonItem, IonInput,
    IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard
  ]
})
export class CirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  formulario = new FormGroup({
    radio: new FormControl(undefined, [Validators.required])
  })

}
