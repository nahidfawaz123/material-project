import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/pojo/user.module';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user :User={
    id:undefined,
    username:"" ,
    password:"" ,
    fullName:"" ,
    email:"",
    status:""}


  id? :any;
    constructor(private routr : ActivatedRoute , private api : ApiService ) { }

    ngOnInit(): void {
      this.routr.queryParams.subscribe((params : Params )=>
        {
          this.id = params['id']; })
        console.log(this.id);

        this.api.doGetUSerById(this.id).subscribe(

          (response) => {
            this.user = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );

      }
}
