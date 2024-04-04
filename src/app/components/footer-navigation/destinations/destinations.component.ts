import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  dataDestinations = [
    { city: 'Madrid', urlLink: '#'},
    { city: 'Barcelona', urlLink: '#'},
    { city: 'London', urlLink: '#'},
    { city: 'Paris', urlLink: '#'},
    { city: 'Rome', urlLink: '#'}
  ];
}
