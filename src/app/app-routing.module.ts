import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent
  },
  {
    path: 'academy',
    component: AcademyComponent
  },
  {
    path: 'contact',
    component: ContactoComponent
  },
  {
    path: 'biography',
    component: BiographyComponent
  },
  {
    path: 'courses',
    component: CursosComponent
  },
  {
    path: 'services',
    component: ServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
