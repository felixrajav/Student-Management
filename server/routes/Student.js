// routes/student.js
import express from "express";
import { StudentModel } from "../models/student.js";

const router = express.Router();

// Add a student
router.post("/add", async (req, res) => {
  try {
    const { rollno, name, dob, address, phoneno } = req.body;
    const newStudent = new StudentModel({ rollno, name, dob, address, phoneno });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// List all students
router.get("/list", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await StudentModel.findByIdAndDelete(id);
    if (deletedStudent) {
      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rollno, name, dob, address, phoneno } = req.body;
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      id,
      { rollno, name, dob, address, phoneno },
      { new: true } // return the updated document
    );
    if (updatedStudent) {
      res.status(200).json(updatedStudent);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

export default router;
