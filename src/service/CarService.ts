import prismaClient from "../database/prismaClient";

class CarService {
  async geCarById(idCarro: number) {
    console.log("car log: " + idCarro);

    const car = await prismaClient.car.findFirst({
      where: {
        id_carro: idCarro,
      },
    });
    console.log(car);
    return car;
  }
}

export default CarService;
