import { Request, Response } from "express";
import { UserService } from "../service/UserService";
const service = new UserService();

export class UserController {
  async login(request: Request, response: Response) {
    const loginStatus = await service.login(request.body);
    return response.send(loginStatus);
  }

  async saveUser(request: Request, response: Response) {
    const dto = await service.saveUser(request);
    return response.status(201).json(dto);
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const idUsuario = Number.parseInt(id);
    const user = await service.getUserById(idUsuario);
    if (user) return response.json(user);
    return response.end();
  }
}
