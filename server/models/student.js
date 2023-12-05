// models/student.js
import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  address: { type: String },
  phoneno: { type: String },
});

export const StudentModel = mongoose.model("student", StudentSchema);
