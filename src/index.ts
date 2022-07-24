import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import carRouter from "./Car/car.routes";
import cnhRouter from "./CNH/cnh.routes";
import utilRouter from "./Util/util.routes";
import optionalRouter from "./Optional/optional.routes";
import rentalRouter from "./Rental/rental.routes";
import userRouter from "./User/user.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(carRouter);
app.use(cnhRouter);
app.use(utilRouter);
app.use(optionalRouter);
app.use(rentalRouter);
app.use(userRouter);

app.listen(process.env.PORT);
