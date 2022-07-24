import { CNH } from "@prisma/client";
import moment from "moment";

export interface CnhDTO {
  id?: number;
  bornDate?: string | null;
  rg?: string | null;
  registerNumber?: string | null;
  cnh?: string | null;
  dueDate?: string | null;
  state?: string | null;
  userId?: number | null;
}

export function cnhToDTO(cnh: CNH) {
  return {
    id: cnh.id_cnh,
    bornDate: moment(cnh.data_nasc).format("YYYY-MM-DD"),
    rg: cnh.rg,
    registerNumber: cnh.num_registro,
    cnh: cnh.num_cnh,
    dueDate: moment(cnh.data_validade).format("YYYY-MM-DD"),
    state: cnh.estado,
    userId: cnh.id_usuario,
  };
}
