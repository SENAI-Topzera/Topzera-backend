import { Request, Response } from "express";
import CarService from "../service/CarService";
import prismaClient from "../database/prismaClient";
import UploadImageService from '../service/UploadImageService';

const carService = new CarService(); 

export class CarController {
    async findAll(request: Request, response: Response) {
        return response.json(await prismaClient.carro.findMany());
    }

    async getCarById(request: Request, response: Response) {
        const { id } = request.params;
        const idCarro: number = Number.parseInt(id);
        return response.json(await carService.geCarById(idCarro));
    }

    async uploadImage(request: Request, response: Response) {
        const uploadService = new UploadImageService();
        uploadService.sendObject(request.body);

        return response.send();
    }
}