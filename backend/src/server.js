import express from "express";
import cors from 'cors';
import {clerkMiddleware} from '@clerk/express';

import { EVN } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get("/api/", (req, res) => res.send("Hello connection"));

app.use("/api/users", )

const startServer = async () => {
  try {
    await connectDB();
    app.listen(EVN.PORT, () =>
      console.log(`Server running on PORT: ${EVN.PORT}`)
    );
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
