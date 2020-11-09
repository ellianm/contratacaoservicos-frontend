import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private registerService: RegisterService) { }

  checkUserNameTaken() {
    const userNameTaken = 'userNameTaken';
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.registerService.checkUserNameTaken(userName)
        ))
        .pipe(map(isTaken => {
          if (isTaken[userNameTaken]) {
            return { userNameTaken: true };
          } else {
            return null;
          }
        }))
        .pipe(tap())
        .pipe(first());
    }
  }
  checkEmailTaken() {
    const emailTaken = 'emailTaken';
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(email =>
          this.registerService.checkEmailTaken(email)
        ))
        .pipe(map(isTaken => {
          if (isTaken[emailTaken]) {
            return { emailTaken: true };
          } else {
            return null;
          }
        }))
        .pipe(tap())
        .pipe(first());
    }
  }
}
