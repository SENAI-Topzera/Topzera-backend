import { Request } from "express";
import prismaClient from "../database/prismaClient";

export class UserService {
    async saveUser(request: Request) {
        const user = request.body;
       return await prismaClient.usuario.create(user);
    }
   
    async getUserById(idusuario: number) {
        const user: any = await prismaClient.usuario.findFirst({
            where: {
                id_usuario: idusuario
            }
        })
        return user;
    }
}