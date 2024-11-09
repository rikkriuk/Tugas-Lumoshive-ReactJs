import React from "react";
import "./ListItem.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = ({ data }) => {

   const handleDelete = (id) => {
      api.delete(`students/${id}`)
      .then(() => {
         alert("Berhasil hapus")
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
               <h2>Daftar Mahasiswa</h2>
               <Link to={"/add"} className="button add-btn">
                  <i className="bi bi-plus-square"></i>
                  Tambah
               </Link>
            </div>

            <div className="list-item-content">
               <table>
                  <thead>
                     <tr>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Tahun</th>
                        <th>NIM</th>
                        <th>Nama Wali</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>Aksi</th>
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
                                 Ubah
                              </Link>
                              <button onClick={() => handleDelete(item.id)} className="delete-btn">
                                 <i className="bi bi-trash-fill"></i>
                                 Hapus
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
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
};

export default ListItem;