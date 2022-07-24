import { Request, Response } from "express";
import OptionalService from "./OptionalService";

const optionalService = new OptionalService();

class OptionalController {
  async saveOptional(request: Request, response: Response) {
    return response.json(await optionalService.saveOptional(request.body));
  }

  async getOptionalById(request: Request, response: Response) {
    const { id } = request.params;
    const idOpcionais: number = Number.parseInt(id);
    return response.json(await optionalService.getOptionalById(idOpcionais));
  }
}

export default OptionalController;
