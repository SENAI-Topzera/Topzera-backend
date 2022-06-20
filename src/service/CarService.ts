import prismaClient from "../database/prismaClient";

class CarService {
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
}

export default CarService;
