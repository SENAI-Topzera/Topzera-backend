import { Router } from "express";
import { CarController } from "./controllers/CarController";
import { StatusController } from "./controllers/StatusController";

const router = Router();
const carController = new CarController();
const statusController = new StatusController();

router.get("/cars", carController.findAll);
router.get("/", statusController.handle);
router.post("/id", carController.getCarroById);

export { router };