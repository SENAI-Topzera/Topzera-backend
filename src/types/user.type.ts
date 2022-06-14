import { User } from "@prisma/client";

export interface UserDTO {
  id: number;
  name: string;
  nationality?: string | null;
  gender?: string | null;
  phone?: string;
  email?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export enum ELoginStatus {
  LOGGED = "Logado",
  USER_NOT_FOUND = "Usuário não encontrado",
  INCORRECT_CREDENTIALS = "Usuário ou senha incorretos",
}

export function userToDTO(user: User): UserDTO {
  return {
    id: user.id_usuario,
    name: user.nome_completo,
    nationality: user.nacionalidade,
    gender: user.genero,
    phone: user.telefone,
    email: user.email,
  };
}
