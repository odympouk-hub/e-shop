import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',

})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(username: string, password: string) {
    return this.http.get<User>(`${environment.apiUrl}/user?username=${username}&password=${password}`);
  }

  postUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/user`, user);
  }


  deleteUser(id: number) {
    return this.http.delete<User>(`${environment.apiUrl}/user?id=${id}`);
  }
  patchUser(user:User){
    return this.http.patch<User>(`${environment.apiUrl}/user`,user);
  }
}