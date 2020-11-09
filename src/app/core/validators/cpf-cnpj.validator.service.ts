import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@Injectable()
export class CpfCnpjValidator {
    constructor() { }

    /**
     * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
    */
    isValidCnpjf() {
        return (control: AbstractControl): Validators => {
            const value = control.value;
            if (value) {
                let valid = false;
                if (value.length <= 11) {
                    valid = cpf.isValid(value);
                } else {
                    valid = cnpj.isValid(value);
                }
                if (valid) {
                    return null
                }
                else {
                    return { cpfNotValid: true }
                }
            } else {
                return null
            }
        }
    };
}