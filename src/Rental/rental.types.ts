import { Rental } from "@prisma/client";
import moment from "moment";

export interface RentalDTO {
  id?: number;
  hourValue?: number | null;
  value?: number | null;
  pickupLocation?: string | null;
  pickupDate?: string | null;
  returnDate?: string | null;
  carId?: number | null;
  userId?: number | null;
  accepted?: boolean | null;
}

export interface AcceptRentalDTO {
  rentalId: number;
  accepted: boolean;
}

export function rentalToDTO(rental: Rental): RentalDTO {
  return {
    id: rental.id_locacao,
    hourValue: rental.valor_hora?.toNumber(),
    value: rental.valor_locacao?.toNumber(),
    pickupLocation: rental.local_retirada,
    pickupDate: moment(rental.data_retirada).format("YYYY-MM-DD HH:mm:ss"),
    returnDate: moment(rental.data_devolucao).format("YYYY-MM-DD HH:mm:ss"),
    carId: rental.id_carro,
    userId: rental.id_usuario,
    accepted: rental.aceita,
  };
}
