import { Optionals } from "@prisma/client";

export interface OptionalDTO {
  id?: number;
  airConditioner?: boolean | null;
  hydraulicSteering?: boolean | null;
  abs?: boolean | null;
  electricLocks?: boolean | null;
  airbag?: boolean | null;
  sunroof?: boolean | null;
  traction?: boolean | null;
  warmColdAirConditioner?: boolean | null;
  electricWindows?: boolean | null;
  onBoardComputer?: boolean | null;
  carId: number | null;
}

export function optionalToDTO(optional: Optionals): OptionalDTO {
  return {
    id: optional.id_opcionais,
    airConditioner: optional.ar_cond,
    hydraulicSteering: optional.dir_hid,
    abs: optional.abs,
    electricLocks: optional.trava_elet,
    airbag: optional.airbag,
    sunroof: optional.teto_solar,
    traction: optional.tracao,
    warmColdAirConditioner: optional.ar_quenteFrio,
    electricWindows: optional.vidro_elet,
    onBoardComputer: optional.comp_bord,
    carId: optional.id_carro,
  };
}
