import { Request, Response } from "express";
import CarService from "../services/CarService";
import ImageService from "../services/ImageService";

const imageService = new ImageService();
const carService = new CarService();

class CarController {
  async saveCar(request: Request, response: Response) {
    return response.json(await carService.saveCar(request.body));
  }

  async editCar(request: Request, response: Response) {
    const { id } = request.params;
    const idCarro: number = Number.parseInt(id);
    return response.json(await carService.editCar(request.body, idCarro));
  }

  async findAll(request: Request, response: Response) {
    return response.json(await carService.findAll());
  }

  async getCarById(request: Request, response: Response) {
    const { id } = request.params;
    const idCarro: number = Number.parseInt(id);
    return response.json(await carService.geCarById(idCarro));
  }

  async uploadImage(request: Request, response: Response) {
    imageService.sendObject(request.body);
    return response.send();
  }

  async getCarImages(request: Request, response: Response) {
    const key = request.body.Key;
    const data = await imageService.getObject(key);
    return response.send(data);
  }
}

export default CarController;
