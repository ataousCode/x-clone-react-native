import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { EVN } from "./config/env.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get("/api/", (req, res) => res.send("Hello connection"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

//error handling
app.use((err, req, res) => {
  console.log("Unhandled error: ", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

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
