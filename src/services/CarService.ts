import moment from "moment";
import prismaClient from "../database/prismaClient";
import { CarDTO, carToDTO } from "../types/car.type";

export default class CarService {
  async findAll(): Promise<Array<CarDTO>> {
    return await (
      await prismaClient.car.findMany()
    ).map((car) => carToDTO(car));
  }

  async geCarById(idCarro: number): Promise<void | CarDTO> {
    const car = await prismaClient.car.findFirst({
      where: {
        id_carro: idCarro,
      },
    });
    if (car) return carToDTO(car);
    return;
  }

  async saveCar(car: CarDTO): Promise<CarDTO> {
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

    return carToDTO(savedCar);
  }
}
