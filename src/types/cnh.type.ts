import { CNH } from "@prisma/client";

export interface CnhDTO {
  id?: number;
  bornDate: string;
  rg: string;
  registerNumber?: string;
  cnh: string;
  dueDate: string;
  state: string;
  userId: number;
}

export function cnhToDTO(cnh: CNH) {
  return {
    id: cnh.id_cnh,
    bornDate: cnh.data_nasc,
    rg: cnh.rg,
    registerNumber: cnh.num_registro,
    cnh: cnh.num_cnh,
    dueDate: cnh.data_validade,
    state: cnh.estado,
    userId: cnh.id_usuario,
  };
}
