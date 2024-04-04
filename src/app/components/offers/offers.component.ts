import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  dataOffers = [
    { city: 'Chicago', price: 288, urlImage: 'city-chicago-1.png', altImage: '' },
    { city: 'Porto', price: 350, urlImage: 'city-porto.png', altImage: '' },
    { city: 'Chicago', price: 210, urlImage: 'city-chicago-2.png', altImage: '' }
  ];

  imageUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.dataOffers.forEach(offer => {
      const imagePath = 'assets/' + offer.urlImage;
      const safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
      this.imageUrls.push(safeImageUrl);
    });
  }
}
