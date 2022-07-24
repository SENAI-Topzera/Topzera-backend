import { Request, Response } from "express";
import UserService from "./UserService";
const service = new UserService();

class UserController {
  async login(request: Request, response: Response) {
    const loginStatus = await service.login(request.body);
    return response.send(loginStatus);
  }

  async saveUser(request: Request, response: Response) {
    const { body } = request;
    const dto = await service.saveUser(body);
    return response.status(201).json(dto);
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const idUsuario = Number.parseInt(id);
    const user = await service.getUserById(idUsuario);
    if (user) return response.json(user);
    return response.end();
  }

  async getAccountInfo(resquest: Request, response: Response) {
    const { id } = resquest.params;
    const dto = await service.getAccountInfo(Number.parseInt(id));
    return response.json(dto);
  }
}

export default UserController;
