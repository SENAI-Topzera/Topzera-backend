
import { Request, Response } from "express";
import { CarService } from "../service/CarService";
import prismaClient from "../database/prismaClient";

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
}