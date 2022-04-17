import { DetailsUserComponent } from './../details-user/details-user.component';
import { EditUserComponent } from './../edit-user/edit-user.component';
import { ShowUserComponent } from './../show-user/show-user.component';
import { UserComponent } from './../user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'



@NgModule({
  declarations: [UserComponent , ShowUserComponent ,EditUserComponent,DetailsUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class UserModule { }
