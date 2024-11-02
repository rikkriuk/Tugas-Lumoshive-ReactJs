import React from "react";
import Button from "../atoms/Button";

const ModalFooter = (props) => {
   const { onClick, isEdit } = props;

   return (
      <div className="modal-footer">
         <Button 
            type="submit" 
            className={`btn ${isEdit ? "btn-warning" : "btn-primary"}`} 
            onClick={onClick}>
            {isEdit ? "Update" : "Add"}
         </Button>
      </div>
   )
};

export default ModalFooter;
