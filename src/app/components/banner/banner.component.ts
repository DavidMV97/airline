import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  public title : string = 'Take a rest'
  public description : string = 'Discover all the offers available at the best prices for the whole country and the world'
}
