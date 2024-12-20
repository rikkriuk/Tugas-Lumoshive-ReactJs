import React, { useContext, useEffect, useState } from "react";
import "./Form.css"
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { api } from "../../utils/api";
import LoadingSvg from "../Loading/Loading";
import NotFoundPage from "../NotFound/NotFound";
import { LanguageContext, ThemeContext } from "../../App";
import formValidation from "../../utils/validation";
import useStudentData from "../../hooks/useStudentData";
import Swal from "sweetalert2";

const Form = () => {
   const navigate = useNavigate();
   const {language} = useContext(LanguageContext);
   const {isDarkMode} = useContext(ThemeContext);
   const {id} = useParams();
   const [errorForm, setErrorForm] = useState({});
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const students = useStudentData();
   const [originalNim, setOriginalNim] = useState(false);
   const [form, setForm, handleChange] = useInput({
      name: "",
      class: "",
      year: "",
      nim: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: ""
   });

   useEffect(() => {
      // Check if id (edit) is exist
      if (id) {
         setLoading(true)
         api.get(`students/${id}`)
         .then((res) => {
            const data = res.data.data;
            setForm(data);
            setOriginalNim(data.nim);
         })
         .catch((err) => {
            setError(true);
         })
         .finally(() => {
            setLoading(false);
         })
      }
   }, [])

   // Handle search form
   const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validate form
      if (formValidation(form, setErrorForm, language, students, originalNim)) {
         return;
      }

      try {
         let response;
         if (id) {
            response = await api.put(`/students/${id}`, form);
         } else {
            response = await api.post("/students", form);
         }

         Swal.fire({
            title: language === "en" ? "Success" : "Berhasil!",
            text: language === "en" ? `Successfully ${id ? "changed" : "added"} student data` : `Berhasil ${id ? "ubah" : "tambah"} data siswa`,
            icon: "success",
            confirmButtonText: "OK"
         });
         navigate("/");
      } catch (err) {
         Swal.fire({
            title: "Error!",
            text: language === "en" ? "Something wrong, try again!" : "Terjadi kesalahan, coba lagi!",
            icon: "error",
            confirmButtonText: language === "en" ? "Try again" : "Coba lagi"
         });
         console.log(err)
      }
   }

   if (loading) {
      return (
         <>
            <LoadingSvg />
         </>
      )
   }

   if (error) {
      return (
         <>
            <NotFoundPage text={language === "en" ? "Student data not found" : "Data siswa tidak ditemukan"} />
         </>
      )
   }

   return (
      <>
         <section className="form-section">
            <div className="form-header">
               <h2>{language === "en" ? "Add Student" : "Tambah Siswa"}</h2>
            </div>

            <div className="form-content">
               <form className={isDarkMode ? "dark" : ""}>
                  <div className="form-container">
                     <div className="form-item">
                        <label htmlFor="name">{language === "en" ? "Name" : "Nama"}</label>
                        <input id="name" className={`${errorForm.name && "form-error"}`} name="name" type="text" value={form.name} placeholder={language === "en" ? "Name" : "Nama"}
                        onChange={handleChange} required/>
                        {errorForm.name && <p className="text-error">{errorForm.name}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="class">{language === "en" ? "Class" : "Kelas"}</label>
                        <input id="class" name="class" className={`${errorForm.class && "form-error"}`} type="text" value={form.class} 
                        onChange={handleChange} placeholder={language === "en" ? "Class" : "Kelas"} required/>
                        {errorForm.class && <p className="text-error">{errorForm.class}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="year">{language === "en" ? "Year" : "Tahun"}</label>
                        <input id="year" name="year" className={`${errorForm.year && "form-error"}`} type="number" value={form.year} 
                        onChange={handleChange} placeholder={language === "en" ? "Year" : "Tahun"} required/>
                        {errorForm.year && <p className="text-error">{errorForm.year}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="nim">NIM</label>
                        <input id="nim" name="nim" className={`${errorForm.nim && "form-error"}`} type="number" value={form.nim} onChange={handleChange} placeholder="NIM" required/>
                        {errorForm.nim && <p className="text-error">{errorForm.nim}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="guardian_name">{language === "en" ? "Guardian Name" : "Nama Wali"}</label>
                        <input id="guardian_name" name="guardian_name" className={`${errorForm.guardian_name && "form-error"}`} value={form.guardian_name} onChange={handleChange} type="text" placeholder={language === "en" ? "Guardian Name" : "Nama Wali"} required/>
                        {errorForm.guardian_name && <p className="text-error">{errorForm.guardian_name}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="birthDate">{language === "en" ? "Birth Date" : "Tanggal Lahir"}</label>
                        <input id="birthDate" name="birthDate" className={`${errorForm.birthDate && "form-error"} datepicker-input`} value={form.birthDate} onChange={handleChange} type="date" required/>
                        {errorForm.birthDate && <p className="text-error">{errorForm.birthDate}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="address">{language === "en" ? "Address" : "Alamat"}</label>
                        <textarea id="address" name="address" className={`${errorForm.address && "form-error"}`} value={form.address} onChange={handleChange} placeholder={language === "en" ? "Address" : "Alamat"} required/>
                        {errorForm.address && <p className="text-error">{errorForm.address}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="gender">{language === "en" ? "Gender" : "Jenis Kelamin"}</label>
                        <select name="gender" id="gender" className={`${errorForm.gender && "form-error"}`} value={form.gender} onChange={handleChange}>
                           <option value="" disabled>{language === "en" ? "Choose Gender" : "Pilih Jenis Kelamin"}</option>
                           <option value="male">{language === "en" ? "Male" : "Laki-laki"}</option>
                           <option value="female">{language === "en" ? "Female" : "Perempuan"}</option>
                        </select>
                        {errorForm.gender && <p className="text-error">{errorForm.gender}</p>}
                     </div>
                  </div>

                  <div className="button-container">
                     <button onClick={() => navigate(-1)} className="back-btn">
                        <i className="bi bi-backspace"></i>
                        {language === "en" ? "Back" : "Kembali"}
                     </button>

                     <button onClick={handleSubmit} className={`${id ? "edit-btn" : "add-btn"}`}>
                        <i className={`bi ${id ? "bi-pencil" : "bi-plus-square"}`}></i>
                        {id 
                           ? (language === "en" ? "Upload" : "Ubah") 
                           : (language === "en" ? "Add" : "Tambah")}
                     </button>
                  </div>
               </form>
            </div>
         </section>
      </>
   )
}

export default Form;