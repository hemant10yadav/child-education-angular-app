import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ButtonComponent} from "../shared/button/button.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ButtonComponent],
})
export class HomePage {
  constructor() {}
}
