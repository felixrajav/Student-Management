import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/students/list');
        const students = response.data;
        setStudents(students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);



  return (
    <div className="home-container">
    <h2>Student List</h2>
    <table>
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Phone No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.rollno}</td>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.address}</td>
            <td>{student.phoneno}</td>
            <td>
            <Link to={`/edit/${student._id}`}>Edit</Link> |{' '}
              <Link to={`/delete/${student._id}`}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Home;
