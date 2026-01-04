import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
  
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(username:string,password:string) {
    return this.http.get<User>(`${environment.apiUrl}/user?username=${username}&password=${password}`);
  }
}
