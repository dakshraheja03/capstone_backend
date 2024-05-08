import express from "express"
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "../backend/routes/authRoute.js";
import studentRoute from "../backend/routes/studentRoute.js"
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoute);
app.use("/api/student",studentRoute);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our Capstone Project</h1>");
});

//PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
