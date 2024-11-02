import React, { Component } from "react";
import ListStudent from "../templates/ListStudent";
import AddStudent from "../templates/AddStudent";
import { createStudent, getStudents, getDetailStudent, editStudent, deleteStudent, searchStudents } from "../../utils/api";

class HomePage extends Component {
   state = {
      students: [],
      isFormVisible: false,
      isEdit: false,
      idEdit: null,
      searchQuery: "",
      form: {
         name: "",
         class: "",
         year: "",
         nim: "",
         guardian_name: "",
         birthDate: "",
         address: "",
         gender: "",
      },

      formValidation: {},
      isLoading: false,
   }

   // Set state isFormVisible
   setIsFormVisible = () => {
      this.setState({ isFormVisible: !this.state.isFormVisible });
      if (this.state.isEdit) {
         this.setState({ isEdit: false, idEdit: null });
         this.formReset();
      }
   }

   // Fetch data students
   fetchStudents = () => {
      getStudents()
      .then((students) => {
         this.setState({ students, loading: false });
      })
      .catch((error) => {
         console.error("Error fetching students:", error);
      });
   }

   // Handle editing data student
   handleEditStudent = (id) => {
      getDetailStudent(id)
      .then((student) => {
         if (student) {
            this.setIsFormVisible();
            this.setState({ form: student, isEdit: true, idEdit: id });
         }
      })
      .catch((error) => {
         this.setState({ isEdit: false });
      }
   )}

   // Handle changing data input
   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         form: {
            ...this.state.form,
            [name]: value
         }
      });
   }

   // Handle sumbit data student
   handleSubmit = (e) => {
      e.preventDefault();
      if (!this.validationForm()) {
         return;
      }

      this.setState({ isLoading: true });
      if (this.state.isEdit) {
         editStudent(this.state.form, this.state.idEdit)
         .then(() => {
            this.setIsFormVisible();
            this.fetchStudents();
            this.formReset();
            this.setState({ isEdit: false });
         })
         .catch((err) => {
            console.log(err);
         })
         .finally(() => {
            this.setState({ isLoading: false });
         })
      } else {
         createStudent(this.state.form)
         .then(() => {
            this.setIsFormVisible();
            this.formReset();
            this.fetchStudents();
         })
         .catch((err) => {
            console.log(err);
         })
         .finally(() => {
            this.setState({ isLoading: false });
         })
      }
   }

   // Handle delete data student
   handleDelete = (id) => {
      deleteStudent(id)
      .then((res) => {
         this.fetchStudents();
      })
      .catch((err) => {
         console.log(err);
      })
   }

   // Validasi Form
   validationForm = () => {
      const { form, isEdit, idEdit } = this.state;
      let isValid = true;
      const formValidation = {};

      // Validasi NIM jika ada pengeditan
      let nimIsEdit = isEdit 
      ? this.state.students.some(student => student.nim === form.nim && student.id !== idEdit)
      : this.state.students.some(student => student.nim === form.nim);

      const validationRules = {
         name: {
            condition: () => !form.name.trim(),
            message: "Name cant be empty"
         },
         class: {
            condition: () => !form.class.trim(),
            message: "Classs cant be empty"
         },
         year: {
            condition: () => !form.year || parseInt(form.year, 10) < 2000 || parseInt(form.year, 10) > 2024,
            message: "Year must be between 2000 and 2024"
         },
         nim: {
            condition: () => !form.nim.trim() || nimIsEdit,
            message: "NIM must be unique"
         },
         guardian_name: {
            condition: () => !form.guardian_name.trim(),
            message: "Guardian name cant be empty"
         },
         birthDate: {
            condition: () => !form.birthDate.trim(),
            message: "Birth date cant be empty"
         },
         address: {
            condition: () => form.address.trim().length < 20,
            message: "Address must be at least 20 characters"
         },
         gender: {
            condition: () => !["male", "female"].includes(form.gender),
            message: "Gender must be male or female"
         }
      };

      for (const field in validationRules) {
         const { condition, message } = validationRules[field];
         if (condition()) {
            formValidation[field] = message;
            isValid = false;
         }
      }

      this.setState({ formValidation });

      return isValid;
   }

   // Reset form
   formReset = () => {
      this.setState({
         form: {
            name: "",
            class: "",
            year: "",
            nim: "",
            guardian_name: "",
            birthDate: "",
            address: "",
            gender: "",
         }
      });
   }

   // Handle search student
   handleSearchStudents = () => {
      const { searchQuery } = this.state;
      if (searchQuery.trim() === "") {
         this.fetchStudents();
         return;
      }

      searchStudents(searchQuery)
      .then((students) => {
         this.setState({ students });
      })
      .catch((error) => {
         console.error("Error searching students", error);
      })
   }

   // Handle change query search
   handleChangeQuery = (e) => {
      this.setState({ searchQuery: e.target.value });
   }

  render() {
    return (
      <div className="container">
         <ListStudent 
            setIsFormVisible={this.setIsFormVisible}  
            isFormVisible={this.state.isFormVisible}
            fetchStudents={this.fetchStudents}
            students={this.state.students}
            editStudent={this.handleEditStudent}
            formData={this.state.form}
            handleDelete={this.handleDelete}
            handleSearch={this.handleSearchStudents}
            handleChangeQuery={this.handleChangeQuery}
         />

         {this.state.isFormVisible && 
         <AddStudent 
            setIsFormVisible={this.setIsFormVisible}
            fetchStudents={this.fetchStudents} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            formData={this.state.form}
            isEdit={this.state.isEdit} 
            formValidation={this.state.formValidation}
            isLoading={this.state.isLoading}
         />}
      </div>
    );
  }
}

export default HomePage;