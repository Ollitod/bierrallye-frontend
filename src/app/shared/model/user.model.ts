import {Role} from './role';

export interface IUser {
  username: string;
  uuid?: string;
  role: Role;
}
