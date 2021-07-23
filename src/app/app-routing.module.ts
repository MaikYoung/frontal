import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { IgaComponent } from './pages/iga/iga.component';
import { CondicionesUsoComponent } from './pages/condiciones-uso/condiciones-uso.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { VentaReembolsoComponent } from './pages/venta-reembolso/venta-reembolso.component';
import { TecnicoSuperiorComponent } from './pages/tecnico-superior/tecnico-superior.component';
import { TecnicoAvanzadoComponent } from './pages/tecnico-avanzado/tecnico-avanzado.component';
import { EspecializacionTecnicaComponent } from './pages/especializacion-tecnica/especializacion-tecnica.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent
  },
  {
    path: 'academy',
    component: AcademyComponent
  },
  // {
  //   path: 'contact',
  //   component: ContactoComponent
  // },
  {
    path: 'biography',
    component: BiographyComponent
  },
  {
    path: 'courses',
    component: CursosComponent,
  },
  {
    path: 'courses/superior-technician',
    component: TecnicoSuperiorComponent
  },
  {
    path: 'courses/advanced-technician',
    component: TecnicoAvanzadoComponent
  },
  {
    path: 'courses/technical-specialization',
    component: EspecializacionTecnicaComponent
  },
  {
    path: 'services',
    component: ServicioComponent
  },
  {
    path: 'iga',
    component: IgaComponent
  },
  {
    path: 'terms-of-use',
    component: CondicionesUsoComponent
  },
  {
    path: 'cookies-policy',
    component: PoliticaCookiesComponent
  },
  {
    path: 'privacy-policy',
    component: PoliticaPrivacidadComponent
  },
  {
    path: 'legal-notice',
    component: AvisoLegalComponent
  },
  {
    path: 'sale-and-refund-policy',
    component: VentaReembolsoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
