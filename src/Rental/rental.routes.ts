import { Router } from "express";
import RentalController from "./RentalController";

const rentalRouter = Router();
const rentalController = new RentalController();

rentalRouter.post("/api/rentals", rentalController.saveRental);
rentalRouter.get("/api/rentals", rentalController.findAll);
rentalRouter.get("/api/rentals/:id", rentalController.findById);
rentalRouter.get("/api/rentals/user/:userId", rentalController.findByUserId);
rentalRouter.get("/api/rentals/car/:carId", rentalController.findByCarId);
rentalRouter.put("/api/rentals/accept-rental", rentalController.acceptRental);

export default rentalRouter;
