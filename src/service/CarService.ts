import prismaClient from "../database/prismaClient";

export class CarService {
    async geCarById(idCarro: number) {
        await prismaClient.carro.findUnique({
            where: {
                id_carro: 1
            }
        })
    }
}