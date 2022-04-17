import { EditComponent } from './../edit-materail/edit-materail.component';
import { ShowMaterailComponent } from './../show-materail/show-materail.component';
import { MaterailComponent } from '../materail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const router : Routes=[
  {path:'materail', component:MaterailComponent },
  { path: 'show', component: ShowMaterailComponent },
  { path: 'edit', component: EditComponent  },


]
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class MaterailRoutingModule { }
