import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-information',
  templateUrl: './legal-information.component.html',
  styleUrl: './legal-information.component.scss'
})
export class LegalInformationComponent {
  dataLegal = [
    { nameLink: 'Privacy policy', urlLink: '#'},
    { nameLink: 'Cookie policies', urlLink: '#'},
    { nameLink: 'data treatment', urlLink: '#'}
  ];
}
