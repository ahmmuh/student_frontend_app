import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students/")
      .then((res) => res.json())
      .then((students) => setStudents(students));
  }, []);

  const deleteStudent = (_id) => {
    setStudents({
      students: students.filter((_, i) => i !== _id),
    });
  };

  return (
    <div className="container">
      <table className="table border py-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student._id}</td>
                <td>
                  {student.street}
                  <br />
                  {student.postNumber}
                  <br />
                  {student.state}
                </td>
                <td
                  href="#"
                  className="btn btn-sm btn-danger mt-1"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
