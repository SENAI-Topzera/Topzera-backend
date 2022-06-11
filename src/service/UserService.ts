import { Request } from "express";
import prismaClient from "../database/prismaClient";

export class UserService {
  async saveUser(request: Request) {
    const user = request.body;
    return await prismaClient.user.create({
      data: {
        nome_completo: user.nomeCompleto,
        nacionalidade: user.nacionalidade,
        genero: user.genero,
        telefone: user.telefone,
        email: user.email,
        senha: user.senha,
        local_img_user: user.imagemUsuario,
        local_img_car: user.imagemCarro,
        CNH_id_cnh: user.idCnh,
        id_endereco: user.idEndereco,
      },
    });
  }

  async getUserById(idusuario: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id_usuario: idusuario,
      },
    });
    return user;
  }
}

// nome completo
// telefone
// email
// senha
// id_cnh = 1
// id_endereco = 1
