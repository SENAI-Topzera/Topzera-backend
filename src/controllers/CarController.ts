
import { Request, Response } from "express";
import { CarService } from "../service/CarService";
import prismaClient from "../database/prismaClient";

const carService = new CarService(); 

export class CarController {
    async findAll(request: Request, response: Response) {
        return response.json(await prismaClient.carro.findMany());
    }

    async getCarroById(request: Request, response: Response) {
        const idCarro = 1;
        return response.json(await carService.getCarById(idCarro));
    }
}


