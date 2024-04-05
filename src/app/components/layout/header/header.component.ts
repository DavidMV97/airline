import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // variable to show and hide menu
  public active : boolean = false
  // variable to show hide subitems information
  public activeItemsInformation : boolean = false

  constructor() {}

  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

  setActiveInformation() : void {
    console.log('clickk');

    this.activeItemsInformation = !this.activeItemsInformation
  }

}
