import { Router } from "express";
import StatusController from "./AppStatus/StatusController";

const utilRouter = Router();
const statusController = new StatusController();

utilRouter.get("/api", statusController.handle);

export default utilRouter;
