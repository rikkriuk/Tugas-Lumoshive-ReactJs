import React, { Component } from "react";
import Modal from "../organisms/Modal";

class AddStudent extends Component {
   render() {
        return (
            <>
               <Modal 
                  setIsFormVisible={this.props.setIsFormVisible}
                  handleChange={this.props.handleChange}
                  handleSubmit={this.props.handleSubmit}
                  formData={this.props.formData}
                  isEdit={this.props.isEdit}
                  formValidation={this.props.formValidation}
                  isLoading={this.props.isLoading}
               />
            </>
        )
    }
}

export default AddStudent;