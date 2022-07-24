import { Router } from "express";
import CnhController from "./CnhController";

const cnhRouter = Router();
const cnhController = new CnhController();

cnhRouter.get("/api/cnh", cnhController.findAll);
cnhRouter.post("/api/cnh", cnhController.saveCnh);
cnhRouter.get("/api/cnh/:id", cnhController.getCnhById);
cnhRouter.delete("/api/cnh/:id", cnhController.deleteCnhById);

export default cnhRouter;
