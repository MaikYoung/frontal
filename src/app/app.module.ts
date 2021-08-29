import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IgaComponent } from './pages/iga/iga.component';
import { CondicionesUsoComponent } from './pages/condiciones-uso/condiciones-uso.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { VentaReembolsoComponent } from './pages/venta-reembolso/venta-reembolso.component';
import { TecnicoSuperiorComponent } from './pages/tecnico-superior/tecnico-superior.component';
import { TecnicoAvanzadoComponent } from './pages/tecnico-avanzado/tecnico-avanzado.component';
import { EspecializacionTecnicaComponent } from './pages/especializacion-tecnica/especializacion-tecnica.component';
import { MapContactComponent } from './components/map-contact/map-contact.component';
import { SafePipe } from './pipes/safe.pipe';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { StoreComponent } from './pages/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    BiographyComponent,
    AcademyComponent,
    CursosComponent,
    ServicioComponent,
    ContactoComponent,
    IgaComponent,
    CondicionesUsoComponent,
    PoliticaCookiesComponent,
    PoliticaPrivacidadComponent,
    AvisoLegalComponent,
    VentaReembolsoComponent,
    TecnicoSuperiorComponent,
    TecnicoAvanzadoComponent,
    EspecializacionTecnicaComponent,
    MapContactComponent,
    SafePipe,
    SocialNetworkComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
