import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const DeleteStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/students/${id}`);
          const student = response.data;
          setStudent(student);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert('Student not found');
            window.location.href = '/'; // Redirect or handle as needed
          } else {
            console.error('Error fetching student:', error);
          }
        }
      };

    fetchStudent();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/students/delete/${id}`);
      alert('Student deleted successfully');
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student');
    }
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="delete-student-container">
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete the following student?</p>
      <p>
        <strong>Roll No:</strong> {student.rollno}
      </p>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Date of Birth:</strong> {student.dob}
      </p>
      <p>
        <strong>Address:</strong> {student.address}
      </p>
      <p>
        <strong>Phone No:</strong> {student.phoneno}
      </p>
      <button onClick={handleDelete}>Delete Student</button>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default DeleteStudent;
