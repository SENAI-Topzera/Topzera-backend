import { Router } from "express";
import { CarController } from "./controllers/CarController";
import { StatusController } from "./controllers/StatusController";
import multer from "multer";
import multerConfig from "./config/multer";

const router = Router();
const carController = new CarController();
const statusController = new StatusController();
const uploadImage = multer(multerConfig);

router.get("/api/cars", carController.findAll);
router.get("/api/", statusController.handle);
router.get("/api/:id", carController.getCarById);
router.post("/api/uploadImage", uploadImage.array('images', 10), carController.uploadImage);

export { router };