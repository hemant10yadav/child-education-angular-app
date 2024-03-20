import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ButtonComponent} from "../shared/button/button.component";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
  standalone: true,
  imports: [IonicModule, ButtonComponent, NgForOf, FormsModule, ButtonComponent]
})
export class SubscribeFormComponent {
  public readonly monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  public dob: Date = new Date();
  public gender: string = '';


  constructor () {
  }


  public getDate (): Date {
    return new Date(this.dob || null);
  }
}
