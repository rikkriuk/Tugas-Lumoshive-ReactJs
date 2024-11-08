import React from "react";
import "./Form.css"
import { useNavigate } from "react-router-dom";

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
                        <input id="name" name="name" type="text" placeholder="Nama" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="class">Kelas</label>
                        <input id="class" name="class" type="text" placeholder="Kelas" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="year">Tahun</label>
                        <input id="year" name="year" type="number" placeholder="Tahun" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="nim">NIM</label>
                        <input id="nim" name="nim" type="number" placeholder="NIM" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="guardian_name">Nama Wali</label>
                        <input id="guardian_name" name="guardian_name" type="text" placeholder="Nama Wali" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="birthDate">Tanggal Lahir</label>
                        <input id="birthDate" name="birthDate" type="date" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="address">Alamat</label>
                        <textarea id="address" name="address" placeholder="Alamat" required/>
                     </div>

                     <div className="form-item">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select name="gender" id="gender">
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                        </select>
                     </div>
                  </div>

                  <div className="button-container">
                     <button onClick={() => navigate(-1)} className="back-btn">
                        <i className="bi bi-backspace"></i>
                        Kembali
                     </button>

                     <button className="add-btn">
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