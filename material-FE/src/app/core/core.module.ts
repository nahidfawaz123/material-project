import { ApiService } from './http/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ApiService]
})
export class CoreModule { }
