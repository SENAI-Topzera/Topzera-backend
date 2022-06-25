import { User } from "@prisma/client";
import { AddressDTO } from "./address.type";
import { CnhDTO } from "./cnh.type";

export interface UserDTO {
  id: number;
  name: string;
  nationality?: string | null;
  gender?: string | null;
  phone?: string;
  email: string;
  cpf: string;
  postalCode?: string;
  place?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
}

export interface SaveUserDTO {
  name: string;
  nationality?: string | null;
  gender?: string | null;
  phone: string;
  email: string;
  password: string;
  userImage?: string;
  cpf: string;
  postalCode: string;
  place: string;
  number: string;
  district: string;
  city: string;
  state: string;
}

export interface AccountInfoDTO {
  userId: number;
  userName: string;
  nationality?: string | null;
  gender?: string | null;
  phone?: string;
  email: string;
  postalCode?: string;
  place?: string;
  addressNumber?: string;
  district?: string;
  city?: string;
  state?: string;
  bornDateCnh?: string | null;
  rg?: string | null;
  registerNumberCnh?: string | null;
  cnh?: string | null;
  dueDateCnh?: string | null;
  stateCnh?: string | null;
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

export function userToDTO(user: User, address?: AddressDTO): UserDTO {
  return {
    id: user.id_usuario,
    name: user.nome_completo,
    nationality: user.nacionalidade,
    gender: user.genero,
    phone: user.telefone,
    email: user.email,
    cpf: user.CPF,
    postalCode: address?.postalCode,
    place: address?.place,
    number: address?.number,
    district: address?.district,
    city: address?.city,
    state: address?.state,
  };
}

export function createMyAccountDTO(
  user: UserDTO,
  address?: AddressDTO | null,
  cnh?: CnhDTO | null
): AccountInfoDTO {
  return {
    userId: user.id,
    userName: user.name,
    nationality: user.nationality,
    gender: user.gender,
    phone: user.phone,
    email: user.email,
    postalCode: address?.postalCode,
    place: address?.place,
    addressNumber: address?.number,
    district: address?.district,
    city: address?.city,
    state: address?.state,
    bornDateCnh: cnh?.bornDate,
    rg: cnh?.rg,
    registerNumberCnh: cnh?.registerNumber,
    cnh: cnh?.cnh,
    dueDateCnh: cnh?.dueDate,
    stateCnh: cnh?.state,
  };
}
