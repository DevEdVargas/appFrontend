import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { ProyectosComponent } from './proyectos/proyectos.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'upload', component: UploadComponent},
  {path: '', redirectTo:'/upload', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
