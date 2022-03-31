import { FormsModule } from '@angular/forms';
import { AddMaterailComponent } from './../add-materail.component';
import { AddMaterailRoutingModule } from './add-materail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AddMaterailComponent],
  imports: [CommonModule,
    AddMaterailRoutingModule,
    FormsModule
  ],
})
export class AddMaterailModule { }
