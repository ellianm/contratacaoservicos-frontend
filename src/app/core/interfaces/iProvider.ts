import { User } from '../classes/user';
export interface IProvider extends User {
  rate: number;
  value: number;
}
