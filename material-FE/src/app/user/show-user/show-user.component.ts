import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/pojo/user.module';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit  {
  users : User[]=[]
  id : any ;
  search :string ;
   constructor(private api : ApiService , private router :Router ,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log("hi");

    this.getUsers();


  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
}

  actived(){

  }
  deleted(){

  }
  show(idShow :number){
    this.router.navigate(["/details"], {queryParams : { id: idShow}})
  }
  edit(idEdit:number){
    this.router.navigate(["/editUser"], {queryParams : { id: idEdit}})
  }

  public getUsers(): void {

    this.api.doGetUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  delete(idDelete :number){

    this.api.doDeleteUserById(idDelete).subscribe(
      (response) => {

      }, (error: HttpErrorResponse) => {
        (error.message);
      }
    );
    this.reloadComponent();
  }

}
