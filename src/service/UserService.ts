import { Request } from "express";
import prismaClient from "../database/prismaClient";
import { ELoginStatus, UserLogin, userToDTO } from "../types/user.type";
import { SHA256 } from "crypto-js";

export class UserService {
  async login(login: UserLogin) {
    const user = await this.getUserByEmail(login.email);
    if (user) {
      return SHA256(login.password).toString() === user.senha!
        ? ELoginStatus.LOGGED
        : ELoginStatus.INCORRECT_CREDENTIALS;
    }

    return ELoginStatus.USER_NOT_FOUND;
  }

  async saveUser(request: Request) {
    const user = request.body;
    const encryptedPassword = SHA256(user.password).toString();
    const savedUser = await prismaClient.user.create({
      data: {
        nome_completo: user.name,
        nacionalidade: user.nationality,
        genero: user.gender,
        telefone: user.phone,
        email: user.email,
        senha: encryptedPassword,
        local_img_user: user.userImage,
        local_img_car: user.carImage,
        CNH_id_cnh: user.cnhId,
        id_endereco: user.addressId,
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
    return await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }
}
