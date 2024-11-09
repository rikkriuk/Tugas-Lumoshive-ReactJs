import React, { useContext } from "react";
import "./ListItem.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { api } from "../../utils/api";
import { LanguageContext, ThemeContext } from "../../App";

const ListItem = ({ data, onDeleteSuccess }) => {
   const {language} = useContext(LanguageContext);
   const {isDarkMode} = useContext(ThemeContext);

   const handleDelete = (id) => {
      api.delete(`students/${id}`)
      .then(() => {
         alert("Berhasil hapus")
         onDeleteSuccess();
      })
      .catch((err) => {
         alert("Terjadi kesalahan, coba lagi");
         console.log(err);
      })
   }

   return (
      <>
         <section className="list-item">
            <div className="list-item-header">
               <h2>{language === "en" ? "List Students" : "Daftar Mahasiswa"}</h2>
               <Link to={"/add"} className="button add-btn">
                  <i className="bi bi-plus-square"></i>
                  {language === "en" ? "Add" : "Tambah"}
               </Link>
            </div>

            <div className="list-item-content">
               <table className={isDarkMode ? "dark" : ""}>
                  <thead>
                     <tr>
                        <th>{language === "en" ? "Name" : "Nama"}</th>
                        <th>{language === "en" ? "Class" : "Kelas"}</th>
                        <th>{language === "en" ? "Year" : "Tahun"}</th>
                        <th>NIM</th>
                        <th>{language === "en" ? "Guardian Name" : "Nama Wali"}</th>
                        <th>{language === "en" ? "Birth Date" : "Tanggal Lahir"}</th>
                        <th>{language === "en" ? "Address" : "Alamat"}</th>
                        <th>{language === "en" ? "Gender" : "Jenis Kelamin"}</th>
                        <th>{language === "en" ? "Actions" : "Aksi"}</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map((item) => (
                        <tr key={item.id}>
                           <td>{item.name}</td>
                           <td>{item.class}</td>
                           <td>{item.year}</td>
                           <td>{item.nim}</td>
                           <td>{item.guardian_name}</td>
                           <td>{item.birthDate}</td>
                           <td>{item.address}</td>
                           <td>{item.gender}</td>
                           <td className="action">
                              <Link to={`/edit/${item.id}`} className="button edit-btn">
                                 <i className="bi bi-pencil"></i>
                                 {language === "en" ? "Edit" : "Ubah"}
                              </Link>
                              <button onClick={() => handleDelete(item.id)} className="delete-btn">
                                 <i className="bi bi-trash-fill"></i>
                                 {language === "en" ? "Delete" : "Hapus"}
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>

            </div>
            {data.length === 0 && <p className="empety-data">{language === "en" ? "Empety Data" : "Data Kosong"}</p>}
         </section>
      </>
   )
}

ListItem.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
         nim: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         class: PropTypes.string.isRequired,
         year: PropTypes.string.isRequired,
         guardian_name: PropTypes.string.isRequired,
         birthDate: PropTypes.string.isRequired,
         address: PropTypes.string.isRequired,
         gender: PropTypes.string.isRequired,
      })
   ).isRequired,
   onDeleteSuccess: PropTypes.func.isRequired,
};

export default ListItem;