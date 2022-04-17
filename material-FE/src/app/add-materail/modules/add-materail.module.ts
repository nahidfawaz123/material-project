import { AddMaterailComponent } from './../add-materail.component';
import { AddMaterailRoutingModule } from './add-materail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AddMaterailComponent],
  imports: [CommonModule,
    AddMaterailRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AddMaterailModule { }
