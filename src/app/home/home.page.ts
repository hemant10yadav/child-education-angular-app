import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../shared/button/button.component';
import { SubscribeWidgetComponent } from '../shared/subscribe-widget/subscribe-widget.component';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ButtonComponent, SubscribeWidgetComponent, NgForOf],
})
export class HomePage {
  public subscribeWidget = [
    {
      logo: 'assets/img/subscribe.png',
      title: 'Subscribe',
      description: "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      logo: 'assets/img/settings.png',
      title: 'Personalise Your Box',
      description: "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      logo: 'assets/img/box.png',
      title: 'Receive Your Surprise Box',
      description:
        'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
    },
  ];

  constructor(private router: Router) {}

  public subscribe(): void {
    void this.router.navigate(['subscribe']);
  }
}
