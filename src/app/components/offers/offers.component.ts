import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  dataOffers = [
    { city: 'Chicago', price: 288, urlImage: 'city-chicago-1.png', altImage: 'Image of the city of Chicago showing some buildings' },
    { city: 'Porto', price: 350, urlImage: 'city-porto.png', altImage: 'Image of the city of Porto showing a bridge and a neighborhood in the background' },
    { city: 'Chicago', price: 210, urlImage: 'city-chicago-2.png', altImage: 'Image of the city of Chicago showing some buildings' }
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
