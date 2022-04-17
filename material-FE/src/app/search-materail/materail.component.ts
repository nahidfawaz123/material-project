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
 id : any ;
 search :string ;
  constructor(private api : ApiService , private router :Router) { }

  ngOnInit(): void {
    this.getmaterails() }

  show(idShow :number){
    this.router.navigate(["/show"], {queryParams : { id: idShow}})}
  edit(idEdit:number){
    this.router.navigate(["/edit"], {queryParams : { id: idEdit}})}

  public getmaterails(): void {
    this.api.doGet().subscribe(
      (response: Materail[]) => {
        this.materails = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  delete(idDelete :number){
    this.api.doDeleteById(idDelete).subscribe(
      (response) => {
        this.getmaterails()
      },

      (error: HttpErrorResponse) => {
        alert(error.message);}
    );
  }


}
