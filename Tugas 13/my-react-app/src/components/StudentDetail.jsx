import React from "react";

export default function StudentDetail({ toggleModal, student }) {
   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title">Student Detail</h5>
               <button 
                  onClick={toggleModal} 
                  type="button" 
                  className="btn-close" data-bs-dismiss="modal" aria-label="Close">
               </button>
            </div>
            <div className="modal-body">
               <p>
                  <span className="fw-bold">Name:</span> {student.name}
               </p>
               <p>
                  <span className="fw-bold">NIM:</span> {student.nim || "-"}
               </p>
               <p>
                  <span className="fw-bold">Birth Date:</span> {student.birthDate || "-"}
               </p>
               <p>
                  <span className="fw-bold">Address:</span> {student.address || "-"}
               </p>
               <p>
                  <span className="fw-bold">Guardian Name</span> {student.guardianName || "-"}
               </p>
            </div>
         </div>
      </div>
   )
}