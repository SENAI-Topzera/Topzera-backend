import { User } from "@prisma/client";
import { Request } from "express";
import prismaClient from "../database/prismaClient";
import { userToDTO } from "../types/user.type";
import { SHA256 } from "crypto-js";

export class UserService {
  async saveUser(request: Request) {
    const user = request.body;
    const encryptedPassword = SHA256(user.senha);
    const savedUser = await prismaClient.user.create({
      data: {
        nome_completo: user.nomeCompleto,
        nacionalidade: user.nacionalidade,
        genero: user.genero,
        telefone: user.telefone,
        email: user.email,
        senha: encryptedPassword.toString(),
        local_img_user: user.imagemUsuario,
        local_img_car: user.imagemCarro,
        CNH_id_cnh: user.idCnh,
        id_endereco: user.idEndereco,
      },
    });

    return userToDTO(savedUser);
  }

  async getUserById(idusuario: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id_usuario: idusuario,
      },
    });

    if (user) return userToDTO(user);
    return;
  }
}
