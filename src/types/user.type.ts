import { User } from "@prisma/client";

export interface UserDTO {
  id: number;
  nomeCompleto: string;
  nacionalidade?: string | null;
  genero?: string | null;
  telefone?: string;
  email?: string;
}

export function userToDTO(user: User): UserDTO {
  return {
    id: user.id_usuario,
    nomeCompleto: user.nome_completo,
    nacionalidade: user.nacionalidade,
    genero: user.genero,
    telefone: user.telefone,
    email: user.email,
  };
}
