import express from "express";
import carRoutes from "./routes/car";
import statusRoute from "./routes/status";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(carRoutes);
app.use(statusRoute);
app.listen(process.env.PORT);