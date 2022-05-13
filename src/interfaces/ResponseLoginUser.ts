import {Usuario} from "../interfaces/Usuario";

export interface ResponseLoginUser {
  token: string;
  role: string;
  id: string;
  user: Usuario;
}