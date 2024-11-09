import React, { useContext } from "react";
import "./ListItem.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { api } from "../../utils/api";
import { LanguageContext, ThemeContext } from "../../App";
import Swal from "sweetalert2";
import useInput from "../../hooks/useInput";

const ListItem = ({ data, setData, handleRefresh }) => {
   const {language} = useContext(LanguageContext);
   const {isDarkMode} = useContext(ThemeContext);
   const [form, setForm, handleChange] = useInput({
      search: "",
   });

   const handleDelete = (id) => {
      Swal.fire({
        title: language === "en" ? "Are you sure?" : "Apa kamu yakin?",
        text: language === "en" ? "Student data will be permanently deleted." : "Data siswa akan dihapus secara permanen.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: language === "en" ? "Yes, delete!" : "Ya, hapus!",
        cancelButtonText: language === "en" ? "No, cancel" : "tidak, batal!"
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`students/${id}`)
            .then(() => {
              Swal.fire({
                title:  language === "en" ? "Success" : "Berhasil!",
                text: language === "en" ? "Successfully deleted student data" : "Berhasil hapus data siswa",
                icon: "success",
                confirmButtonText: "OK"
              }).then(() => {
                handleRefresh();
              });
            })
            .catch((err) => {
              Swal.fire({
                title: "Error!",
                text: language === "en" ? "Something wrong, try again!" : "Terjadi kesalahan, coba lagi!",
                icon: "error",
                confirmButtonText: language === "en" ? "Try again" : "Coba lagi"
              });
              console.log(err);
            });
        } else {
          Swal.fire({
            title: language === "en" ? "Cancelled" : "Dibatalkan",
            text: language === "en" ? "Student data is not deleted." : "Data siswa tidak dihapus.",
            icon: "info",
            confirmButtonText: "OK"
          });
        }
      });
   }

   const handleSearch = () => {
      api.get(`students?find=${form.search}`)
      .then((res) => {
         setForm({
            search: "",
         });
         setData(res.data.data);
      })
      .catch((err) => {
         console.log(err);
      });
   }

   return (
      <>
         <section className="list-item">
            <div className="list-item-header">
               <h2>{language === "en" ? "List Students" : "Daftar Mahasiswa"}</h2>
               <div className="search-container">
                  <input type="text" onChange={handleChange} className="search-input" name="search" placeholder={language === "en" ? "Search..." : "Cari..."} />
                  <button onClick={handleRefresh} className="btn back-btn"><i className="bi bi-x-lg"></i></button>
                  <button onClick={handleSearch} className="btn theme-btn">
                     <i className="bi bi-search"></i>
                     {language === "en" ? "Find" : "Temukan"}
                  </button>

                  <Link to={"/add"} className="button add-btn">
                     <i className="bi bi-plus-square"></i>
                     {language === "en" ? "Add" : "Tambah"}
                  </Link>
               </div>
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
   setData: PropTypes.func.isRequired,
   handleRefresh: PropTypes.func.isRequired,

};

export default ListItem;