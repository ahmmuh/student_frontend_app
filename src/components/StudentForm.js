import axios from "axios";
import React, { useState } from "react";

function StudentForm() {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    address: {
      street: "",
      postNumber: "",
      state: "",
    },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setNewStudent({
      ...newStudent,
      [e.target.name]: value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: newStudent.name,
      email: newStudent.email,
      street: newStudent.street,
      postNumber: newStudent.postNumber,
      state: newStudent.state,
    };

    axios
      .post("http://localhost:5000/students/add", student)
      .then((res) => setNewStudent(res.data));
    console.log(student);
  };
  return (
    <div className="container mb-5 py-3">
      <form onSubmit={addStudent}>
        <div className="form-group">
          <label htmlFor="name">Ditt namn:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={handleChange}
            value={newStudent.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            onChange={handleChange}
            value={newStudent.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Gata:</label>
          <input
            type="text"
            className="form-control"
            name="street"
            id="street"
            onChange={handleChange}
            value={newStudent.street}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postNumber">Postnummer:</label>
          <input
            type="text"
            className="form-control"
            name="postNumber"
            id="postNumber"
            onChange={handleChange}
            value={newStudent.postNumber}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">Stad:</label>
          <input
            type="text"
            className="form-control"
            name="state"
            id="state"
            onChange={handleChange}
            value={newStudent.state}
          />
        </div>

        <button className="btn btn-info my-2">Ny student</button>
      </form>
    </div>
  );
}

export default StudentForm;
