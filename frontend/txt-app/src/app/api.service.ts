import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schema } from './txt.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/data';
  private apiUrlUpdateSceneById = 'http://localhost:3000/data/scene/id-pov';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateSceneById(data: Schema): Observable<any> {
    return this.http.post<Schema>(this.apiUrlUpdateSceneById, data);
  }

  updateData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}
