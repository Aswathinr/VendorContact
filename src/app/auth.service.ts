import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }
  public login(userInfo: Login){
    localStorage.setItem('ACCESS_TOKEN',"acess_token");
    localStorage.setItem('UserID',userInfo.username);
    return this.httpService.get<Login>(environment.apiUrl+'/loginuserdetails/'+userInfo.username)
  }
  public isLoggedIn(){
    return localStorage.getItem('ACESS_TOKEN')!==null;
  }
  public reservation(){
    return localStorage.getItem('ACCESS_TOKEN')!=null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
