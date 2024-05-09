import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HowItComponent } from './how-it/how-it.component';
import { FeaturedComponent } from './featured/featured.component';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HowItComponent,
    FeaturedComponent,
    AppFeaturesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
