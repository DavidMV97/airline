import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-secondary',
  templateUrl: './banner-secondary.component.html',
  styleUrl: './banner-secondary.component.scss'
})
export class BannerSecondaryComponent {
  title: string = 'Our destinations'
  subtitle: string = 'Discover the world'
  description: string = 'Embark on an unforgettable adventure! Discover and enjoy our fascinating destinations. We are waiting for you to explore the world together!'
}
