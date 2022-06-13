import { Request, Response } from "express";
import { UserService } from "../service/UserService";
const service = new UserService();

export class UserController {
  async saveUser(request: Request, response: Response) {
    const dto = await service.saveUser(request);
    return response.json(dto).status(201);
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const idUsuario = Number.parseInt(id);
    const user = await service.getUserById(idUsuario);
    if (user) return response.json(user);
    return response.end();
  }
}
