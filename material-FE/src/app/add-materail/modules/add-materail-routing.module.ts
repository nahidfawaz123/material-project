import { AddMaterailComponent } from './../add-materail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const router : Routes=[
  {path:'add', component:AddMaterailComponent}
]
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class AddMaterailRoutingModule { }
