import React, { Component } from "react"
import StudentTable from "../components/StudentTable"
import StudentForm from "../components/StudentForm"
import StudentDetail from "../components/StudentDetail"
import Swal from "sweetalert2";

export default class StudentContainer extends Component {
   state = {
      modalForm: false,
      modalDetail: false,
      isEdit: false,
      editedStudent: "",
      currentStudent: {
         name: "",
         nim: "",
         birthDate: "",
         address: "",
         guardianName: ""
      },

      students: [
         {
            name: "Riki Ridwan",
            nim: "3241234",
            birthDate: "2003-04-11",
            address: "Jl. Raya Kb. Jeruk No. 27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
            guardianName: "Alexsa"
         },
         {
            name: "Alexsa",
            nim: "7612789",
            birthDate: "2002-04-11",
            address: "Jl. Raya Kb. Jeruk No. 27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
            guardianName: "Alex"
         },
         {
            name: "Makrofag",
            nim: "3728793",
            birthDate: "2005-04-11",
            address: "Jl. Raya Kb. Jeruk No. 27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
            guardianName: "Punca"
         },
         {
            name: "Neutrofil",
            nim: "8239182",
            birthDate: "2004-04-11",
            address: "Jl. Raya Kb. Jeruk No. 27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
            guardianName: "Punca"
         },
         {
            name: "Basofil",
            nim: "8928392",
            birthDate: "2000-04-11",
            address: "Jl. Raya Kb. Jeruk No. 27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
            guardianName: "Punca"
         }
      ]
   }

   handleInputChange = (e) => {
      const { name, value } = e.target
      if (name === "nim" && !/^\d*$/.test(value)) {
         return;
      }

      this.setState((prevState) => ({
         currentStudent: {
            ...prevState.currentStudent,
            [name]: value
         }
      }))
   }

   handleEditStudent = (student, index) => {
      this.setState({
         modalForm: !this.state.modalForm, 
         isEdit: true, currentStudent: student, editedStudent: index
      })
   }

   toggleModalForm = (isEdit = false) => {
      this.setState({ isEdit, modalForm: !this.state.modalForm })
   }

   toggleModalDetail = (student) => {
      this.setState({ modalDetail: !this.state.modalDetail })
      if (!this.state.modalDetail) {
         this.state.currentStudent = student;
      } else {
         this.setState({ 
            currentStudent: { name: "", nim: "", birthDate: "", address: "", guardianName: "" } 
         })
      }
   }

   handleAddOrUpdateStudent = () => {
      const isAnyFieldEmpty = Object.values(this.state.currentStudent).some((value) => value.trim() === "");

      if (isAnyFieldEmpty) {
         Swal.fire({
            title: "Error!",
            text: "Mohon isi semua field!",
            icon: "error",
            confirmButtonText: "OK"
         });
         return;
      }

      const { currentStudent, isEdit } = this.state;
      if (isEdit) {
         const index = this.state.editedStudent;
         const updateStudent = [...this.state.students];
         updateStudent[index] = currentStudent;
         this.setState({ students: updateStudent })

         Swal.fire({
            title: "Berhasil!",
            text: "Data siswa berhasil diupdate!",
            icon: "success",
            confirmButtonText: "OK"
         });
      } else {
         this.setState((prevState) => ({
            students: [...prevState.students, currentStudent]
         }))

         Swal.fire({
            title: "Berhasil!",
            text: "Data siswa berhasil ditambahkan!",
            icon: "success",
            confirmButtonText: "OK"
         });
      }
      
      this.setState({ 
         currentStudent: { name: "", nim: "", birthDate: "", address: "", guardianName: "" } 
      })
      
      this.toggleModalForm(!this.state.isEdit);
   }

   handleDelete = (index) => {
      Swal.fire({
         title: "Apakah kamu yakin?",
         text: "Data ini akan dihapus dan tidak dapat dikembalikan!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonText: "Ya, hapus!",
         cancelButtonText: "Batal"
      }).then((result) => {
         if (result.isConfirmed) {
            this.state.students.splice(index, 1);
            this.setState({ students: this.state.students })
            
            Swal.fire(
               "Terhapus!",
               "Data siswa berhasil dihapus.",
               "success"
            );
         }
      });
   }

   render() {
      return (
         <div>
            <StudentTable students={this.state.students} toggleModalForm={this.toggleModalForm} toggleModalDetail={this.toggleModalDetail} handleStudent={this.handleEditStudent} handleDelete={this.handleDelete} />

            {this.state.modalForm && <StudentForm isEdit={this.state.isEdit} toggleModal={this.toggleModalForm} student={this.state.currentStudent} onChange={this.handleInputChange} onSubmit={this.handleAddOrUpdateStudent} />}

            {this.state.modalDetail && <StudentDetail student={this.state.currentStudent} toggleModal={this.toggleModalDetail} />}
         </div>
      )
   }
}