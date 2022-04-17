import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from './../core/pojo/user.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user :User [] =[];
  constructor(private api :ApiService,  private router :Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goUSerShow() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/showUser'], { relativeTo: this.route });
  }

  onAddUser(addForm: NgForm){

this.api.doUserPost(addForm.value).subscribe(
  (response :User[])=>{
  },
  (error: HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
  }
);
this.goUSerShow()
  }

}
