// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { connectDB } from './config/db.js';
// import userRouter from './routes/userRoute.js';
// import incomeRouter from './routes/incomeRoute.js';
// import expenseRouter from './routes/expenseRoute.js';
// import dashboardRouter from './routes/dashboardRoute.js';







// const app =express();
// const port =4000;

// const allowedOrigins =[
//     "http://localhost:5173",
//     "http://localhost:5174",
//      "http://localhost:5175",
//        "https://ex-tracker-jsy2.vercel.app"
    

// ];




// //middlewaress\
// // app.use(cors());

// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true
//   })
// );
// // app.use(clerkMiddleware());
// app.use(express.json());
// app.use(express.urlencoded({  extended : true}));



// //DB
// connectDB();


// //Routes

// app.use("/api/user",userRouter)
// app.use("/api/income",incomeRouter);
// app.use("/api/expense",expenseRouter);
// app.use("/api/dashboard",dashboardRouter);





// app.get('/',(req,res)=>{
//     res.send("API WORKING");
    
// });


// app.listen(port, () =>{
//     console.log(`Server Started on http://localhost:${port}`);
// });

import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import "dotenv/config";

import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import incomeRouter from "./routes/incomeRoute.js";
import expenseRouter from "./routes/expenseRoute.js";
import dashboardRouter from "./routes/dashboardRoute.js";

const app = express();

/* ---------------------- CORS CONFIG ---------------------- */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
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

// Handle preflight requests
app.options("*", cors());

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

/* ---------------------- SERVERLESS EXPORT ---------------------- */

export const handler = serverless(app);