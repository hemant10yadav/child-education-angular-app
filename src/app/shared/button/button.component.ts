import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, NgClass]
})

export class ButtonComponent {
  @Input({required: true}) title!: string;
  @Input() fullWidth = false;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor () {
  }


  public handleClick (): void {
    this.clicked.emit();
  }
}
