import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EjemploPadreComponent } from './components/ejemplo-padre/ejemplo-padre.component';
import { EjemploHijoComponent } from './components/ejemplo-hijo/ejemplo-hijo.component';
import { CardComponent } from './components/card/card.component';
import { CardWapperComponent } from './components/card-wapper/card-wapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EjemploPadreComponent,
    EjemploHijoComponent,
    CardComponent,
    CardWapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
