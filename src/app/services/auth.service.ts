import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membro } from '../model/membro.model';
import { FACELIST_API } from '../app.api';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(values: { email: string, password: string }) {
    return this.http.get<User[]>(`${FACELIST_API}/users?email=`+values.email);
  }

  register(user: User) {
    return this.http.post<User>(`${FACELIST_API}/users`,user);
  }

  clear() {
    localStorage.clear()
  }

  isAuthenticated(){
    return (localStorage.getItem('user') !== null ? true : false);
  }

  logout() {
    this.clear();
    this.router.navigate(['/'])
  }

}
