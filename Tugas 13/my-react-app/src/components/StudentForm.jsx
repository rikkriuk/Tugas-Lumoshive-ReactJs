import React from "react";

export default function StudentForm({ toggleModal, student, onChange, onSubmit, isEdit }) {
   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title">{isEdit ? "Form Edit Student" : "Form New Student"}</h5>
               <button 
                  onClick={toggleModal} 
                  type="button" 
                  className="btn-close" data-bs-dismiss="modal" aria-label="Close">
               </button>
            </div>
            <div className="modal-body">
               <form>
                  <div className="mb-3">
                     <label htmlFor="name" className="form-label">Student Name</label>
                     <input 
                     value={student.name} type="text" 
                     name="name" 
                     onChange={onChange}
                     className="form-control" id="name" 
                     required/>
                  </div>

                  <div className="mb-3">
                     <label htmlFor="nim" className="form-label">Student NIM</label>
                     <input 
                     value={student.nim} type="text" inputMode="numeric" name="nim" 
                     onChange={onChange}
                     className="form-control" id="nim" 
                     min="0"
                     required/>
                  </div>

                  <div className="mb-3">
                     <label htmlFor="birthDate" className="form-label">Birth Date</label>
                     <input 
                     value={student.birthDate} type="date" 
                     name="birthDate" 
                     onChange={onChange}
                     className="form-control" id="birthDate"
                     required/>
                  </div>

                  <div className="mb-3">
                     <label htmlFor="address" className="form-label">Address</label>
                     <textarea 
                     value={student.address} name="address" 
                     onChange={onChange}
                     className="form-control" id="address"
                     required/>
                  </div>

                  <div className="mb-3">
                     <label htmlFor="guardianName" className="form-label">Guardian Name</label>
                     <input 
                     value={student.guardianName} type="text" name="guardianName" 
                     onChange={onChange}
                     className="form-control" id="guardianName"
                     required/>
                  </div>
               </form>
            </div>
            <div className="modal-footer">
               {
                  isEdit ? (
                     <button onClick={onSubmit} type="button" className="btn btn-warning">
                        <i className="bi bi-pencil-square me-2"></i>
                        Update
                     </button>
                  ) : (
                     <button onClick={onSubmit} type="button" className="btn btn-primary">
                        <i className="bi bi-arrow-bar-down me-2"></i>
                        Submit
                     </button>
                  )
               }
            </div>
         </div>
      </div>
   )
}