import { Materail } from '../pojo/materail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pojo/user.module';

@Injectable()
export class ApiService {

  materail: Materail[] = [];
  user :User []=[];

  constructor(private http: HttpClient) {}

  doPost(materailData: Materail): Observable<Materail[]> {
    return this.http.post<Materail[]>(
      'http://localhost:8080/material/add',
      materailData
    );
  }
   // materail api
  public doGet(): Observable<Materail[]> {
    return this.http.get<Materail[]>('http://localhost:8080/material');
  }
  public doGetById(id: number) {
    return this.http.get<Materail>(`http://localhost:8080/material/id/` + id);
  }

  public doDeleteById(id: number) {
    console.log("here id from api"+id);

    return this.http.delete<Materail>(`http://localhost:8080/material/delete/` + id);
  }

  doEdit(materailData: Materail ,id: number): Observable<Materail[]> {
    console.log(materailData);

    return this.http.put<Materail[]>('http://localhost:8080/material/update/'+ id,
      materailData
    );
  }

  //user Api

  doUserPost(userData: User): Observable<User[]> {
    console.log(userData.fullName);

    return this.http.post<User[]>(
      'http://localhost:8080/users/register',
      userData
    );
  }

  public doGetUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users/all');
  }

  public doDeleteUserById(id: number) {
    console.log("here id from api"+id);

    return this.http.delete<User>(`http://localhost:8080/users/delete/` + id);
  }

  public doGetUSerById(id: number) {
    return this.http.get<User>(`http://localhost:8080/users/user/` + id);
  }

  doEditUser(userData: User ,id: number): Observable<User[]> {
    console.log(userData);

    return this.http.put<User[]>('http://localhost:8080/users/update/'+ id,
    userData
    );

  }





}
