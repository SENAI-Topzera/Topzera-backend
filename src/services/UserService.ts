import prismaClient from "../database/prismaClient";
import {
  AccountInfoDTO,
  createMyAccountDTO,
  ELoginStatus,
  SaveUserDTO,
  UserLogin,
  userToDTO,
} from "../types/user.type";
import { SHA256 } from "crypto-js";
import { userDTOToAddressDto } from "../types/address.type";
import AddressService from "./AddressService";
import CnhService from "./CnhService";

const addressService = new AddressService();
const cnhService = new CnhService();

class UserService {
  async login(login: UserLogin) {
    const user = await this.getUserByEmail(login.email);
    if (user) {
      return SHA256(login.password).toString() === user.senha
        ? ELoginStatus.LOGGED
        : ELoginStatus.INCORRECT_CREDENTIALS;
    }

    return ELoginStatus.USER_NOT_FOUND;
  }

  async saveUser(user: SaveUserDTO) {
    const existentUser = await this.getUserByEmail(user.email);
    if (existentUser) {
      const updatedUser = await prismaClient.user.update({
        data: {
          nome_completo: user.name,
          nacionalidade: user.nationality,
          genero: user.gender,
          telefone: user.phone,
          email: user.email,
          senha: SHA256(user.password).toString(),
          local_img_user: user.userImage,
          CPF: user.cpf,
        },
        where: {
          id_usuario: existentUser?.id_usuario,
        },
      });

      return userToDTO(updatedUser);
    }

    const savedUser = await prismaClient.user.create({
      data: {
        nome_completo: user.name,
        nacionalidade: user.nationality,
        genero: user.gender,
        telefone: user.phone,
        email: user.email,
        senha: SHA256(user.password).toString(),
        local_img_user: user.userImage,
        CPF: user.cpf,
      },
    });

    const address = userDTOToAddressDto(user);
    const userDTO = userToDTO(savedUser, address);

    address.userId = userDTO.id;
    addressService.saveAddress(address);

    return userDTO;
  }

  async getUserById(idUsuario: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id_usuario: idUsuario,
      },
    });

    if (user) return userToDTO(user);
    return;
  }

  async getUserByEmail(email: string) {
    return await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async getUserByCpf(cpf: string) {
    return await prismaClient.user.findUnique({
      where: {
        email: cpf,
      },
    });
  }

  async getAccountInfo(userId: number): Promise<void | AccountInfoDTO> {
    let address = null;
    let cnh = null;
    const user = await this.getUserById(userId);

    if (user) {
      address = await addressService.findAddressByUserId(userId);
      cnh = await cnhService.findCnhByUserId(userId);
      return createMyAccountDTO(user, address || null, cnh || null);
    }

    return;
  }
}

export default UserService;
