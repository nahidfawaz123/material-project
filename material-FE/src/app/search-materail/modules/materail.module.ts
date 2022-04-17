import { EditComponent } from './../edit-materail/edit-materail.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterailComponent } from '../materail.component';
import { MaterailRoutingModule } from './materail-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


@NgModule({
  declarations: [MaterailComponent , EditComponent],
  imports: [CommonModule,
    MaterailRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
})
export class MaterailModule { }
