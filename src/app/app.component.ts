import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, NavBarComponent]
})
export class AppComponent {
  constructor () {
  }
}
