import React from "react";
import { Table } from 'react-bootstrap';

function StudentList() {
  const name = "c08";
  const students = [
    {
      id: 1,
      name: "Trương Tấn Hải",
      point: 9,
      address: "Quảng Nam"
    },
    {
      id: 2,
      name: "Trương Tấn Hải",
      point: 7,
      address: "Quảng Nam"
    },
    {
      id: 7,
      name: "Trương Tấn Hải",
      point: 3,
      address: "Quảng Nam"
    }
  ];

  return (
      <div className="container">
        <h1 id="c08" className={`text-center mb-4 ${name}`}>Danh sách học sinh {name}</h1>
        <Table striped bordered hover responsive>
          <thead>
          <tr>
            <th scope="col">STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Point</th>
            <th>Address</th>
            <th>Level</th>
          </tr>
          </thead>
          <tbody>
          {
            students.map((student, index) => {
              let level = '';
              if (student.point >= 8) {
                level = 'Giỏi';
              } else if (student.point >= 6) {
                level = 'Khá';
              } else if (student.point >= 5) {
                level = 'Trung bình';
              } else {
                level = 'Yếu';
              }

              return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.point}</td>
                    <td>{student.address}</td>
                    <td>{level}</td>
                  </tr>
              );
            })
          }
          </tbody>
        </Table>
      </div>
  );
}

export default StudentList;
