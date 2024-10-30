import React, { Component } from "react";

export default function StudentTable({ toggleModalForm, toggleModalDetail, students, handleStudent, handleDelete }) {
   return (
   <div className="table-responsive">
      <table className="table caption-top table-bordered table-hover">
         <caption>List of Student</caption>
         <thead>
            <tr>
               <th scope="col" colSpan="4">
                  <button onClick={() => toggleModalForm()} className="btn btn-primary float-end fw-bold">
                     <i className="bi bi-plus-lg me-2"></i>
                     Add New
                  </button>
               </th>
            </tr>
            <tr>
               <th scope="col">No</th>
               <th scope="col">Name</th>
               <th scope="col">NIM</th>
               <th scope="col">Action</th>
            </tr>
         </thead>
         <tbody>
            {
               students.map((student, index) => (
                  <tr key={index}>
                     <th scope="row">{index + 1}</th>
                     <td>{student.name || "-"}</td>
                     <td>{student.nim || "-"}</td>
                     <td>
                        <button onClick={() => handleDelete(index)} className="btn btn-outline-danger btn-sm float-end">
                           <i className="bi bi-trash"></i>
                        </button>

                        <button onClick={() => 
                        handleStudent(student, index)
                        } className="btn btn-outline-warning btn-sm float-end mx-2">
                           <i className="bi bi-pencil-square"></i>
                        </button>

                        <button onClick={() => toggleModalDetail(student)} className="btn btn-outline-primary btn-sm float-end">
                           <i className="bi bi-info-circle-fill"></i>
                        </button>
                     </td>
                  </tr>
               ))
            }
            
         </tbody>
      </table>
   </div>
   );
}