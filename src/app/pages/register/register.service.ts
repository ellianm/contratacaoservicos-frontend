import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/classes/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.post(environment.API_URL + '/user/existsUserName/', {userName});
  }

  signup(newUser: User) {
    return this.http.post(environment.API_URL + '/user/', newUser);
  }
  checkEmailTaken(email: string) {
    return this.http.post(environment.API_URL + '/user/existsEmail/', {email});
  }
}
