import { Request, Response } from "express";
import CnhService from "../services/CnhService";

const cnhService = new CnhService();

class CnhController {
  async findAll(request: Request, response: Response) {
    response.json(await cnhService.findAll());
  }

  async saveCnh(request: Request, response: Response) {
    const dto = await cnhService.saveCnh(request.body);
    return response.status(201).json(dto);
  }

  async getCnhById(request: Request, response: Response) {
    const { id } = request.params;
    const idCnh: number = Number.parseInt(id);
    return response.json(await cnhService.getCnhById(idCnh));
  }

  async deleteCnhById(request: Request, response: Response) {
    const { id } = request.params;
    const idCnh: number = Number.parseInt(id);
    await cnhService.deleteCnhById(idCnh);
    return response.sendStatus(204);
  }
}

export default CnhController;
