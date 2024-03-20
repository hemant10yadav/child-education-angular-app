import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class NavBarComponent {

  constructor (private readonly route: Router) {
  }

  public navigateToHome (): void {
    void this.route.navigate(['']);
  }

}
