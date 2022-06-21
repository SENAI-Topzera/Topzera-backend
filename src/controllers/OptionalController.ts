import { Request, Response } from "express";
import OptionalService from "../services/OptionalService";

const optionalService = new OptionalService();

class OptionalController {
  async saveOptional(request: Request, response: Response) {
    return response.json(await optionalService.saveOptional(request.body));
  }
}

export default OptionalController;
