import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TokenService } from '../token/token.service';
import { IUserToken } from '../interfaces/iUserToken';
import { UserToken } from '../classes/userToken';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<IUserToken>(null);
  userToken: IUserToken;

  constructor(private tokenService: TokenService, private http: HttpClient) {

    // tslint:disable-next-line: no-unused-expression
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  setCep(cep: string) {
    this.userToken.cep = cep;
    this.tokenService.setCEP(this.userToken.cep);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserCompleto() {
    return this.http.get(environment.API_URL + '/user/' + this.userSubject.value.id);
  }
  getBadgeValue() {
    return this.http.get(environment.API_URL + '/user/badge/' + this.userSubject.value.id);
  }

  private decodeAndNotify() {
    this.userToken = new UserToken(this.tokenService.getToken());
    this.tokenService.setCEP(this.userToken.cep);
    this.userSubject.next(this.userToken);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
