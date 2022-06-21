import { Car } from "@prisma/client";
import moment from "moment";

export interface CarDTO {
  id?: number;
  brand?: string | null;
  model?: string | null;
  modelYear?: string | null;
  color?: string | null;
  board?: string | null;
  typeFuel?: string | null;
  typeGear?: string | null;
  numberDoors?: string | null;
  numberAccents?: string | null;
  numberBaggage?: string | null;
  codeRenavam?: string | null;
  initialAvailability?: string | null;
  finalAvailability?: string | null;
  statusAvailability?: boolean | null;
  userId?: number | null;
  optionalsId?: number | null;
  latitude?: string | null;
  longitude?: string | null;
  description?: string | null;
}

export function carToDTO(car: Car): CarDTO {
  return {
    id: car.id_carro,
    brand: car.marca,
    model: car.modelo,
    modelYear: car.ano_modelo,
    color: car.cor,
    board: car.placa,
    typeFuel: car.tp_comb,
    typeGear: car.tp_cambio,
    numberDoors: car.qtd_portas,
    numberAccents: car.qtd_lugares,
    numberBaggage: car.qtd_bagagem,
    codeRenavam: car.cod_renavam,
    initialAvailability: moment(car.dat_disponibilidade_inic).format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    finalAvailability: moment(car.dat_disponibilidade_fim).format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    statusAvailability: car.ind_status_disponibilidade,
    userId: car.id_usuario,
    optionalsId: car.id_opcionais,
    latitude: car.latitude,
    longitude: car.longitude,
    description: car.descricao,
  };
}
