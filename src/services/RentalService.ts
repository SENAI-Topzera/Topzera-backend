import moment from "moment";
import prismaClient from "../database/prismaClient";
import { RentalDTO, rentalToDTO } from "../types/rental.type";

class RentalService {
  async saveRental(rental: RentalDTO): Promise<RentalDTO> {
    const savedRental = await prismaClient.rental.create({
      data: {
        valor_hora: rental.hourValue,
        valor_locacao: this.calculateRentalValue(rental),
        local_retirada: rental.pickupLocation,
        data_retirada: moment(rental.pickupDate).format(),
        data_devolucao: moment(rental.returnDate).format(),
        id_carro: rental.carId,
        id_usuario: rental.userId,
      },
    });

    return rentalToDTO(savedRental);
  }

  async findAll(): Promise<Array<RentalDTO>> {
    return await (
      await prismaClient.rental.findMany()
    ).map((rental) => rentalToDTO(rental));
  }

  async findById(id: number): Promise<void | RentalDTO> {
    const rental = await prismaClient.rental.findFirst({
      where: {
        id_locacao: id,
      },
    });

    if (rental) return rentalToDTO(rental);
    return;
  }

  async findByUserId(userId: number): Promise<void | RentalDTO> {
    const rental = await prismaClient.rental.findFirst({
      where: {
        id_usuario: userId,
      },
    });

    if (rental) return rentalToDTO(rental);
    return;
  }

  calculateRentalValue(rental: RentalDTO): number {
    const diff = moment(rental.returnDate, "YYYY-MM-DD HH:mm:ss").diff(
      moment(rental.pickupDate, "YYYY-MM-DD HH:mm:ss")
    );
    const hours = moment.duration(diff).asHours();
    return hours * (rental.hourValue ? rental.hourValue : 1);
  }
}

export default RentalService;
