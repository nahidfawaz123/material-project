import { Materail } from '../pojo/materail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  apiRoot: string = 'http://localhost:8080/material/';
  materail: Materail[] = [];

  constructor(private http: HttpClient) {}

  doPost(materailData: Materail): Observable<Materail[]> {
    return this.http.post<Materail[]>(
      'http://localhost:8080/material/add',
      materailData
    );
  }

  public doGet(): Observable<Materail[]> {
    return this.http.get<Materail[]>('http://localhost:8080/material');
  }
  public doGetById(id: number) {
    return this.http.get<Materail>(`http://localhost:8080/material/id/` + id);
  }
}
