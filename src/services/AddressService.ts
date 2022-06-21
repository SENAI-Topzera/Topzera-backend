import prismaClient from "../database/prismaClient";
import { AddressDTO, addressToDto } from "../types/address.type";

class AddressService {
  async saveAddress(dto: AddressDTO) {
    const savedAddress = await prismaClient.address.create({
      data: {
        cep: dto.postalCode,
        logradouro: dto.place,
        numero: dto.number,
        bairro: dto.district,
        cidade: dto.city,
        estado: dto.state,
        id_usuario: dto.userId,
      },
    });
    return addressToDto(savedAddress);
  }
}

export default AddressService;
