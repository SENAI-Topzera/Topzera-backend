import prismaClient from "../database/prismaClient";
import { OptionalDTO, optionalToDTO } from "../types/optional.type";

class OptionalService {
  async saveOptional(optional: OptionalDTO): Promise<OptionalDTO> {
    const savedOptional = await prismaClient.optionals.create({
      data: {
        ar_cond: optional.airConditioner,
        dir_hid: optional.hydraulicSteering,
        abs: optional.abs,
        trava_elet: optional.electricLocks,
        airbag: optional.airbag,
        teto_solar: optional.sunroof,
        tracao: optional.traction,
        ar_quenteFrio: optional.warmColdAirConditioner,
        vidro_elet: optional.electricWindows,
        comp_bord: optional.onBoardComputer,
        id_carro: optional.carId,
      },
    });

    return optionalToDTO(savedOptional);
  }

  async getOptionalById(idOpcionais: number) {
    const optional = await prismaClient.optionals.findFirst({
      where: {
        id_opcionais: idOpcionais,
      },
    });

    if (optional) return optionalToDTO(optional);
    return;
  }
}

export default OptionalService;
