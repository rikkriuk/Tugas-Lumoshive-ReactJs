import React, { Component } from "react";
import ModalHeader from "../molecules/ModalHeader";
import ModalBody from "../molecules/ModalBody";
import ModalFooter from "../molecules/ModalFooter";

const Form = (props) => {
   const { setIsFormVisible, handleChange, handleSubmit, formData, isEdit, formValidation, isLoading} = props;

    return (
      <div className="modal-overlay">
         <div className="modal show d-block modal-cstm" tabIndex="-1">
            <div className="modal-dialog">
               <div className="modal-content">
                  <ModalHeader onClick={setIsFormVisible} isEdit={isEdit} />
                  <ModalBody onChange={handleChange} formData={formData} formValidation={formValidation} isLoading={isLoading}/>
                  <ModalFooter onClick={handleSubmit} isEdit={isEdit} isLoading={isLoading} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Form;