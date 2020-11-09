import { IProvider } from '../interfaces/iProvider';

export class Provider implements IProvider {
    rate: number;
    id: number;
    userName: string;
    name: string;
    telefone: string;
    email: string;
    cep: string;
    uf: string;
    cidade: string;
    rua: string;
    numero: string;
    cnpjf: string;
    rg: string;
    sexo: string;
    dtNascimento: string;
    funcao: string;
    bairro: string;
    senha: string;
    avatarUrl: string;
    avatarFd: string;
    isPrestador: boolean;
    value: number;

    constructor() {}
    
}