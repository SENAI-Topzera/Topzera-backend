import { Request } from "express";
import moment from "moment";
import prismaClient from "../database/prismaClient";

export default class CarService {


    async findAll() {
        return await prismaClient.car.findMany();
      }
    
      async geCarById(idCarro: number) {
        const car = await prismaClient.car.findFirst({
          where: {
            id_carro: idCarro,
          },
        });
        return car;
      }



    async saveCar(request: Request) {
        const car = request.body;
        const savedCar = await prismaClient.car.create({
            data: {
                marca: car.brand,
                modelo: car.model,
                ano_modelo: car.modelYear,
                cor: car.color,
                placa: car.board,
                tp_comb: car.typeFuel,
                tp_cambio: car.typeGear,
                qtd_portas: car.numberDoors,
                qtd_lugares: car.numberAccents,
                qtd_bagagem: car.numberBaggage,
                cod_renavam: car.codeRenavam,
                dat_disponibilidade_inic: moment(car.initialAvailability).format(),
                dat_disponibilidade_fim: moment(car.finalAvailability).format(),
                ind_status_disponibilidade: car.statusAvailability,
                id_usuario: car.userId,
                id_opcionais: car.optionalsId,
                latitude: car.latitude,
                longitude: car.longitude,
                descricao: car.description,
            },
        });

        return savedCar;
    }
}