import express from "express";
import authRoutes from "./Routes/auth.route.js";

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server is running on port 5000"));

app.use("/api/auth/v1", authRoutes);
