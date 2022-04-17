import { DetailsUserComponent } from './../details-user/details-user.component';
import { EditUserComponent } from './../edit-user/edit-user.component';
import { ShowUserComponent } from './../show-user/show-user.component';
import { UserComponent } from './../user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const router : Routes=[
  {path:'new', component:UserComponent} ,
  { path: 'showUser', component: ShowUserComponent},
  { path: 'editUser', component: EditUserComponent},
  { path: 'details', component: DetailsUserComponent},


]
@NgModule({
  imports: [RouterModule.forRoot(router, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class UserRoutingModule { }
