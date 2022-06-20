import { Router } from "express";
import CarController from "./controllers/CarController";
import CnhController from "./controllers/CnhController";
import RentalController from "./controllers/RentalController";
import StatusController from "./controllers/StatusController";
import UserController from "./controllers/UserController";

const router = Router();
const carController = new CarController();
const statusController = new StatusController();
const userController = new UserController();
const cnhController = new CnhController();
const rentalController = new RentalController();

router.get("/api", statusController.handle);
router.get("/api/cnh", cnhController.findAll);
router.post("/api/cnh", cnhController.saveCnh);
router.get("/api/cnh/:id", cnhController.getCnhById);
router.get("/api/cars", carController.findAll);
router.get("/api/cars/:id", carController.getCarById);
router.post("/api/cars", carController.saveCar);
router.post("/api/cars/images", carController.getCarImages); //trazer imagens especificadas
router.post("/api/users", userController.saveUser);
router.get("/api/users/:id", userController.getUserById);
router.post("/api/login", userController.login);
router.post("/api/rentals", rentalController.saveRental);
router.get("/api/rentals", rentalController.findAll);
router.get("/api/rentals/:id", rentalController.findById);
router.get("/api/rentals/user/:userId", rentalController.findByUserId);
// router.post(
//   "/api/uploadImage",
//   uploadImage.array("images", 10),
//   carController.uploadImage
// );

export { router };
