import React ,{ useState }from 'react'
import axios from 'axios';
import './Addstudent.css'
const Addstudent = () => {
    const [formData, setFormData] = useState({
        rollno: '',
        name: '',
        dob: '',
        address: '',
        phoneno: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Make a POST request to your backend API
          const response = await axios.post('http://localhost:4000/students/add', formData);
          console.log(response.data); // Log the response from the server
        } catch (error) {
          console.error('Error adding student:', error);
        }
      };

  return (
     <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Roll No:
          <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone No:
          <input type="text" name="phoneno" value={formData.phoneno} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}

export default Addstudent