// app.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/Student.js"
const app = express();
app.use(express.json());
app.use(cors());

app.use("/students", studentRoutes);
app.get("/", (req, res) => {
  res.send('This is the Student Management applications');
});

const port = 4000;
const DB = "mongodb+srv://felixvictorraj:felix123@cluster0.gcdx9qr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB)
  .then(() => app.listen(port, () => {
    console.log("Server is running on Port", port);
  }))
  .catch((err) => console.error(err.message));

