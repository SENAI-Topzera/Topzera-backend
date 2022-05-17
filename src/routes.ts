import { Router } from "express";
import { CarController } from "./controllers/CarController";
import { StatusController } from "./controllers/StatusController";

const router = Router();
const carController = new CarController();
const statusController = new StatusController();

router.get("/api/cars", carController.findAll);
router.get("/api/", statusController.handle);
router.post("/api/:id", carController.getCarById);

export { router };