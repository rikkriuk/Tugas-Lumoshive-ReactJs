import React from "react"
import Button from "../atoms/Button";

const ModalHeader = (props) => {
   const { onClick, isEdit } = props;
   return (
      <div className="modal-header">
         <h5 className="modal-title">{isEdit ? "Edit Student" : "Add Student"}</h5>
         <Button className="btn-close" onClick={onClick}></Button>
      </div>
   )
}

export default ModalHeader;