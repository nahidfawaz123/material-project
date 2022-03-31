import { ShowMaterailComponent } from './../show-materail/show-materail.component';
import { MaterailComponent } from '../materail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const router : Routes=[
  {path:'materail', component:MaterailComponent },
  { path: 'show', component: ShowMaterailComponent },


]
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class MaterailRoutingModule { }
