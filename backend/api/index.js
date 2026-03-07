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

/* ---------------------- CORS ---------------------- */

const allowedOrigins = [
  "http://localhost:5173",
  "https://ex-tracker-jsy2.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

/* ---------------------- MIDDLEWARE ---------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------- DATABASE ---------------------- */

connectDB();

/* ---------------------- ROUTES ---------------------- */

app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);

/* ---------------------- TEST ROUTE ---------------------- */

app.get("/", (req, res) => {
  res.status(200).send("API WORKING");
});

/* ---------------------- EXPORT FOR VERCEL ---------------------- */

export default serverless(app);