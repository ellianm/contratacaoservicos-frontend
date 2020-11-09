import { User } from '../classes/user';
export interface IUserCep {
  id: number;
  user: User;
  cep: string;
  cityName: string;
}
