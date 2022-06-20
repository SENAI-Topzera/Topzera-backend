import { Request, Response } from "express";
import CarService from "../service/CarService";
import ImageService from "../service/ImageService";

const imageService = new ImageService();
const carService = new CarService();

export class CarController {
  async findAll(request: Request, response: Response) {
    return response.json(await carService.findAll());
  }

  async getCarById(request: Request, response: Response) {
    const { id } = request.params;
    const idCarro: number = Number.parseInt(id);
    console.log(id);
    return response.json(await carService.geCarById(idCarro));
  }

  async uploadImage(request: Request, response: Response) {
    imageService.sendObject(request.body);
    return response.send();
  }

  async getCarImages(request: Request, response: Response) {
    const key = request.body.Key;
    const responsee = await imageService.getObject(key);
    console.log(responsee);
    return response.send(responsee);
  }
}
