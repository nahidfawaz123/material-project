import { User } from 'src/app/core/pojo/user.module';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Materail } from 'src/app/core/pojo/materail.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:User[]=[] ;
  users :User={
    id:undefined,
    username:"" ,
    fullName:"" ,
    password:"",
    email:"",
    status:"" ,
  }


  id :number;
    constructor(private routr : ActivatedRoute , private api : ApiService ) { }

    ngOnInit(): void {
      this.routr.queryParams.subscribe((params : Params )=>
        {
          this.id = params['id'];
        })

        this.api.doGetUSerById(this.id).subscribe(
          (response) => {
            this.users = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );

  }
  onEdit(addForm: NgForm): void {

    this.api.doEditUser(addForm.value,this.id).subscribe(
      (response: User[]) => {
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
