import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarLComponent } from './side-bar-l/side-bar-l.component';
import { SideBarRComponent } from './side-bar-r/side-bar-r.component';
import { MapaComponent } from './mapa/mapa.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarLComponent,
    SideBarRComponent,
    MapaComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
