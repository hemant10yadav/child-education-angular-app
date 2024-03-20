import {Component, Input} from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton]
})

export class ButtonComponent {
@Input({required: true}) title!: string;

  constructor () {
  }


}
