import { ApiService } from './../../core/http/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Materail } from 'src/app/core/pojo/materail.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-materail',
  templateUrl: './show-materail.component.html',
  styleUrls: ['./show-materail.component.css']
})
export class ShowMaterailComponent implements OnInit {
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


id? :any;
  constructor(private routr : ActivatedRoute , private api : ApiService ) { }

  ngOnInit(): void {
    this.routr.queryParams.subscribe((params : Params )=>
      {
        this.id = params['id'];
        console.log(this.id);

      })

      this.api.doGetById(this.id).subscribe(
        (response) => {
          this.materails = response;
          console.log(this.materails);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }

}
