import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    rollno: '',
    name: '',
    dob: '',
    address: '',
    phoneno: '',
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/students/${id}`);
        const fetchedStudent = response.data;
        setStudent(fetchedStudent);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('Student not found:', error);
          alert('Student not found');
          window.location.href = '/';
        } else {
          console.error('Error fetching student:', error);
        }
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/students/update/${id}`, student);
      alert('Student updated successfully');
      window.location.href = '/';
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error updating student');
    }
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="edit-student-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Roll No:
          <input type="text" name="rollno" value={student.rollno} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={student.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" name="dob" value={student.dob} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={student.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone No:
          <input type="text" name="phoneno" value={student.phoneno} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Student</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default EditStudent;
