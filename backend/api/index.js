import express from "express";
import cors from "cors";
import serverless from "serverless-http";

import { connectDB } from "../config/db.js";
import userRouter from "../routes/userRoute.js";
import incomeRouter from "../routes/incomeRoute.js";
import expenseRouter from "../routes/expenseRoute.js";
import dashboardRouter from "../routes/dashboardRoute.js";

const app = express();

/* ---------- CORS ---------- */

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

// allow preflight
app.options("*", cors());

/* ---------- MIDDLEWARE ---------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- DATABASE ---------- */

connectDB();

/* ---------- ROUTES ---------- */

app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);

/* ---------- TEST ---------- */

app.get("/", (req, res) => {
  res.send("API WORKING");
});

/* ---------- SERVERLESS ---------- */

export default serverless(app);