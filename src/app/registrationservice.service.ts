import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  private  apiUrl = 'http://localhost:8089/api/instructor'
  constructor(private http:HttpClient) { }
  public fetchAllData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/all`);
  }
  public addRegistration (registration:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/add`,registration);
  }
  public fetchData (id:any){
    return this.http.get(`${this.apiUrl}/get/${id}`);
  }
}
