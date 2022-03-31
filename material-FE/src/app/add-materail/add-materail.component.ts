import { Materail } from '../core/pojo/materail.model';
import { ApiService } from './../core/http/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-materail',
  templateUrl: './add-materail.component.html',
  styleUrls: ['./add-materail.component.css']
})
export class AddMaterailComponent implements OnInit {
materail:Materail[]=[]
  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

   onAddMaterial(addForm: NgForm): void {

     this.api.doPost(addForm.value).subscribe(
       (response: Materail[]) => {
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       }
     );
   }
}
