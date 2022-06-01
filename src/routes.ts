import { Router } from "express";
import { CarController } from "./controllers/CarController";
import { StatusController } from "./controllers/StatusController";
import { UserController } from "./controllers/UserController";


const router = Router();
const carController = new CarController();
const statusController = new StatusController();
const userController = new UserController();

router.get("/api/cars", carController.findAll);
router.get("/api/", statusController.handle);
router.get("/api/:id", carController.getCarroById);
router.post("/api/user", userController.saveUser);
router.get("/api/user/:id", userController.getUserById);

export { router };