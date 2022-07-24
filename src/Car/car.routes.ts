import { Router } from "express";
import CarController from "./CarController";

const carRouter = Router();
const carController = new CarController();

carRouter.get("/api/cars", carController.findAll);
carRouter.get("/api/cars/:id", carController.getCarById);
carRouter.post("/api/cars", carController.saveCar);
carRouter.post("/api/cars/:id", carController.editCar);

export default carRouter;
