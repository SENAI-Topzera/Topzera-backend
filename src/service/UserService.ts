import prismaClient from "../database/prismaClient";
import {
  ELoginStatus,
  SaveUserDTO,
  UserLogin,
  userToDTO,
} from "../types/user.type";
import { SHA256 } from "crypto-js";

export class UserService {
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

    return userToDTO(savedUser);
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

  // async getUserByEmailOrCpf(email: string, cpf: string): Promise<boolean> {
  //   const byEmail = this.getUserByEmail(email);
  // }
}
