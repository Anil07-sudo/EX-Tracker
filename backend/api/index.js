import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import "dotenv/config";

import { connectDB } from "../config/db.js";
import userRouter from "../routes/userRoute.js";
import incomeRouter from "../routes/incomeRoute.js";
import expenseRouter from "../routes/expenseRoute.js";
import dashboardRouter from "../routes/dashboardRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

export const handler = serverless(app);