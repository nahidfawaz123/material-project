import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Materail } from 'src/app/core/pojo/materail.model';

@Component({
  selector: 'app-root',
  templateUrl: './edit-materail.component.html',
  styleUrls: ['./edit-materail.component.css']
})
export class EditComponent implements OnInit {
  materail:Materail[]=[] ;
  materails :Materail={
    id:undefined,
    monitorDate:undefined ,
    language:"" ,
    section:"" ,
    link:"",
    attachments:"" ,
    title :"",
    content :"",
    author:""}


  id :number;
    constructor(private routr : ActivatedRoute , private api : ApiService ) { }

    ngOnInit(): void {
      this.routr.queryParams.subscribe((params : Params )=>
        {
          this.id = params['id'];

        })

        this.api.doGetById(this.id).subscribe(
          (response) => {
            this.materails = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );

  }
  onEdit(addForm: NgForm): void {

    this.api.doEdit(addForm.value,this.id).subscribe(
      (response: Materail[]) => {
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
