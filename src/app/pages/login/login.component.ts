
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


    msgTexto: string;
    tituloMsg: string;
    type = 'danger';
    mostrarMsg: boolean;
    hide = true;

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private userService: UserService) { }

    ngOnInit(): void {

        if (this.userService.isLogged()) {
          this.router.navigate(['user', this.userService.userToken.id]);
        }

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        this.mostrarMsg = false;
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['profile']),
                err => {
                    this.loginForm.reset();
                    // tslint:disable-next-line: no-unused-expression
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    this.tituloMsg = 'Atenção';
                    this.msgTexto = 'Usuário ou senha incorretos!';
                    this.mostrarMsg = true;
                }
            );
    }
}
