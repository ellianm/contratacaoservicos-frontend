import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    setCEP(cep) {
        window.localStorage.setItem('cep', cep);
    }

    getCep() {
        return window.localStorage.getItem('cep');
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
        this.removeCep();
    }

    removeCep() {
        window.localStorage.removeItem('cep');
    }
}