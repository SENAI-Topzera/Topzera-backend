import { Request, Response } from "express";
import RentalService from "../service/RentalService";

const rentalService = new RentalService();

class RentalController {
  async saveRental(request: Request, response: Response) {
    return response.json(await rentalService.saveRental(request.body));
  }

  async findAll(request: Request, response: Response) {
    return response.json(await rentalService.findAll());
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    return response.json(await rentalService.findById(Number.parseInt(id)));
  }

  async findByUserId(request: Request, response: Response) {
    const { userId } = request.params;
    return response.json(
      await rentalService.findByUserId(Number.parseInt(userId))
    );
  }
}

export default RentalController;
