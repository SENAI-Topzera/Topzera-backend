import { Request, Response } from "express";
import { UserService } from "../service/UserService";
const service = new UserService();

export class UserController {
  async saveUser(request: Request, response: Response) {
    return response.json(service.saveUser(request));
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const idUsuario = Number.parseInt(id);
    return response.json(await service.getUserById(idUsuario));
  }
}
