import { Materail } from '../core/pojo/materail.model';
import { ApiService } from '../core/http/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materail',
  templateUrl: './materail.component.html',
  styleUrls: ['./materail.component.css']
})
export class MaterailComponent implements OnInit {
 materails :Materail[]=[]
 getTitle? : number ;
 search :string ;
  constructor(private api : ApiService , private router :Router) { }

  ngOnInit(): void {
    this.getmaterails()

  }
  show(getTitle :number){
    console.log(getTitle);
    this.router.navigate(["/show"], {queryParams : { id: getTitle}})

  }

  public getmaterails(): void {
    this.api.doGet().subscribe(
      (response: Materail[]) => {
        this.materails = response;
        console.log(this.materails);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
