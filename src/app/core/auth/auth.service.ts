import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(
        environment.API_URL + '/auth',
        { userName, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('token');
        this.userService.setToken(authToken);
      }));
  }
}
