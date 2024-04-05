import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { OffersComponent } from './components/offers/offers.component';
import { BannerSecondaryComponent } from './components/banner-secondary/banner-secondary.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { DestinationsComponent } from './components/footer-navigation/destinations/destinations.component';
import { LegalInformationComponent } from './components/footer-navigation/legal-information/legal-information.component';
import { BookFlightComponent } from './components/footer-navigation/book-flight/book-flight.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    OffersComponent,
    BannerSecondaryComponent,
    SocialMediaComponent,
    FooterNavigationComponent,
    DestinationsComponent,
    LegalInformationComponent,
    BookFlightComponent,
    FooterContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
