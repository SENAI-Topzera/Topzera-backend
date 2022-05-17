import { carro } from "@prisma/client";
import prismaClient from "../database/prismaClient";

export class CarService {
    async geCarById(idCarro: number) {
        const car: any = await prismaClient.carro.findFirst({
            where: {
                id_carro: idCarro
            }
        });
        console.log(car);
        return car;
    }
}