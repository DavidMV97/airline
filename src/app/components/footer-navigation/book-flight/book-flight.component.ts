import { Component } from '@angular/core';


@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.scss'
})
export class BookFlightComponent {
  dataFlight = [
    { nameLink: 'Search flights', urlLink: '#'},
    { nameLink: 'Price calendar', urlLink: '#'},
    { nameLink: 'Destination map', urlLink: '#'},
    { nameLink: 'Flight times', urlLink: '#'}
  ];
}
