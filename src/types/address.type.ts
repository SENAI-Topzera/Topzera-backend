import { Address } from "@prisma/client";
import { SaveUserDTO } from "./user.type";

export interface AddressDTO {
  id?: number;
  postalCode: string;
  place: string;
  number: string;
  district: string;
  city: string;
  state: string;
  userId?: number | null;
}

export function userDTOToAddressDto(userDTO: SaveUserDTO): AddressDTO {
  return {
    postalCode: userDTO.postalCode,
    place: userDTO.place,
    number: userDTO.number,
    district: userDTO.district,
    city: userDTO.city,
    state: userDTO.state,
  };
}

export function addressToDto(address: Address): AddressDTO {
  return {
    id: address.id_endereco,
    postalCode: address.cep,
    place: address.logradouro,
    number: address.numero,
    district: address.bairro,
    city: address.cidade,
    state: address.estado,
    userId: address.id_usuario,
  };
}
