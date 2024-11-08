import React from "react";
import "./ListItem.css"
import { Link } from "react-router-dom";

const ListItem = () => {
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
                     <tr>
                        <td>Riki Ridwan</td>
                        <td>XII</td>
                        <td>2023</td>
                        <td>12345</td>
                        <td>Alexsa</td>
                        <td>11-04-2003</td>
                        <td>Kp. Cigeresik, desa Mekarwangi</td>
                        <td>Laki-laki</td>
                        <td className="action">
                           <Link className="button edit-btn">
                              <i className="bi bi-pencil"></i>
                              Ubah
                           </Link>
                           <button className="delete-btn">
                              <i className="bi bi-trash-fill"></i>
                              Hapus
                           </button>
                        </td>
                     </tr>

                     <tr>
                        <td>Riki Ridwan</td>
                        <td>XII</td>
                        <td>2023</td>
                        <td>12345</td>
                        <td>Alexsa</td>
                        <td>11-04-2003</td>
                        <td>Kp. Cigeresik, desa Mekarwangi</td>
                        <td>Laki-laki</td>
                        <td className="action">
                           <Link className="button edit-btn">
                              <i className="bi bi-pencil"></i>
                              Ubah
                           </Link>
                           <button className="delete-btn">
                              <i className="bi bi-trash-fill"></i>
                              Hapus
                           </button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
      </>
   )
}

export default ListItem;