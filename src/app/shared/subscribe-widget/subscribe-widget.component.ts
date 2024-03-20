import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-subscribe-widget',
  templateUrl: './subscribe-widget.component.html',
  styleUrls: ['./subscribe-widget.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SubscribeWidgetComponent {
  @Input({ required: true }) public description!: string;
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public logo!: string;
  @Input({ required: true }) public count!: number;

  constructor() {}
}
