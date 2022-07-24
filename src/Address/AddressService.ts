import prismaClient from "../database/prismaClient";
import { AddressDTO, addressToDto } from "./address.types";

class AddressService {
  async saveAddress(dto: AddressDTO): Promise<AddressDTO> {
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

  async findAddressByUserId(userId: number): Promise<void | AddressDTO> {
    const address = await prismaClient.address.findFirst({
      where: {
        id_usuario: userId,
      },
    });

    if (address) return addressToDto(address);
    return;
  }
}

export default AddressService;
