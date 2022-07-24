import { Router } from "express";
import OptionalController from "./OptionalController";

const optionalRouter = Router();
const optionalController = new OptionalController();

optionalRouter.post("/api/optionals", optionalController.saveOptional);
optionalRouter.get("/api/optionals/:id", optionalController.getOptionalById);

export default optionalRouter;
