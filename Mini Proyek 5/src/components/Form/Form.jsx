import React, { useState } from "react";
import "./Form.css"
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

// {
//    "name": "Neutrofil",
//    "class": "XII",
//    "year": "2022",
//    "nim": "123123",
//    "guardian_name": "Alexsa",
//    "birthDate": "2024-11-12",
//    "address": "Kp. Cigeresik, Desa Mekarwangi",
//    "gender": "male"
// }

const Form = () => {
   const navigate = useNavigate();
   const [errorForm, setErrorForm] = useState({});
   const [form, handleChange] = useInput({
      name: "",
      class: "",
      year: "",
      nim: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: ""
   });

   // form validation
   const formValidation = () => {
      let errorForm = {};

      if (form.name.trim() === "") {
         errorForm.name = "Nama tidak boleh kosong";
      }

      if (form.class.trim() === "") {
         errorForm.class = "Kelas tidak boleh kosong";
      }

      if (form.year.trim() === "") {
         errorForm.year = "Tahun tidak boleh kosong";
      } else {
         const year = Number(form.year);
         if (year < 2000 || year > 2024) {
            errorForm.year = "Tahun harus antara 2000 sampai 2024";
         }
      }

      if (form.nim.trim() === "") {
         errorForm.nim = "NIM tidak boleh kosong";
      }

      if (form.guardian_name.trim() === "") {
         errorForm.guardian_name = "Nama wali tidak boleh kosong";
      }

      if (form.birthDate === "") {
         errorForm.birthDate = "Tanggal lahir tidak boleh kosong";
      }

      if (form.address.trim() === "") {
         errorForm.address = "Alamat tidak boleh kosong";
      } else {
         if (form.address.length <= 20) {
            errorForm.address = "Alamat setidaknya harus 20 karakter";
         }
      }

      if (form.gender === "") {
         errorForm.gender = "Jenis kelamin tidak boleh kosong";
      }

      setErrorForm(errorForm);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      formValidation();
   }

   return (
      <>
         <section className="form-section">
            <div className="form-header">
               <h2>Tambah Mahasiswa</h2>
            </div>

            <div className="form-content">
               <form>
                  <div className="form-container">
                     <div className="form-item">
                        <label htmlFor="name">Nama</label>
                        <input id="name" className={`${errorForm.name && "form-error"}`} name="name" type="text" value={form.name} placeholder="Nama"
                        onChange={handleChange} required/>
                        {errorForm.name && <p className="text-error">{errorForm.name}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="class">Kelas</label>
                        <input id="class" name="class" className={`${errorForm.class && "form-error"}`} type="text" value={form.class} 
                        onChange={handleChange} placeholder="Kelas" required/>
                        {errorForm.class && <p className="text-error">{errorForm.class}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="year">Tahun</label>
                        <input id="year" name="year" className={`${errorForm.year && "form-error"}`} type="number" value={form.year} 
                        onChange={handleChange} placeholder="Tahun" required/>
                        {errorForm.year && <p className="text-error">{errorForm.year}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="nim">NIM</label>
                        <input id="nim" name="nim" className={`${errorForm.nim && "form-error"}`} type="number" value={form.nim} onChange={handleChange} placeholder="NIM" required/>
                        {errorForm.nim && <p className="text-error">{errorForm.nim}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="guardian_name">Nama Wali</label>
                        <input id="guardian_name" name="guardian_name" className={`${errorForm.guardian_name && "form-error"}`} value={form.guardian_name} onChange={handleChange} type="text" placeholder="Nama Wali" required/>
                        {errorForm.guardian_name && <p className="text-error">{errorForm.guardian_name}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="birthDate">Tanggal Lahir</label>
                        <input id="birthDate" name="birthDate" className={`${errorForm.birthDate && "form-error"}`} value={form.birthDate} onChange={handleChange} type="date" required/>
                        {errorForm.birthDate && <p className="text-error">{errorForm.birthDate}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="address">Alamat</label>
                        <textarea id="address" name="address" className={`${errorForm.address && "form-error"}`} value={form.address} onChange={handleChange} placeholder="Alamat" required/>
                        {errorForm.address && <p className="text-error">{errorForm.address}</p>}
                     </div>

                     <div className="form-item">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select name="gender" id="gender" className={`${errorForm.gender && "form-error"}`} value={form.gender} onChange={handleChange}>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                        </select>
                        {errorForm.gender && <p className="text-error">{errorForm.gender}</p>}
                     </div>
                  </div>

                  <div className="button-container">
                     <button onClick={() => navigate(-1)} className="back-btn">
                        <i className="bi bi-backspace"></i>
                        Kembali
                     </button>

                     <button onClick={handleSubmit} className="add-btn">
                        <i className="bi bi-plus-square"></i>
                        Tambah
                     </button>
                  </div>
               </form>
            </div>
         </section>
      </>
   )
}

export default Form;