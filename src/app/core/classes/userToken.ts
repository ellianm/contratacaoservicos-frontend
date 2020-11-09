import * as jtw_decode from 'jwt-decode';

import { IUserToken } from '../interfaces/iUserToken';

export class UserToken implements IUserToken {
    name: string;
    cep: string;
    id: number;

    constructor(token: string) {
       const user = jtw_decode(token);  
       this.name = user.name;
       this.cep = user.cep;
       this.id = user.userId; 
    }
}