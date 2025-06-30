import express from "express";
import { EVN } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/api/", (req, res) => res.send("Hello connection"));

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
