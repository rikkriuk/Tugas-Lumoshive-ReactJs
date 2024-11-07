import React, { useContext } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { deleteData, getDataById } from "../utils/api";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const ActivityList = ({ data, setShowModal, setForm, setData, setEdit}) => {
  const { language } = useContext(LanguageContext);
  const handleEdit = (id) => {
    getDataById(id)
    .then((data) => {
      setForm({
        ...data,
      })
    })
    setEdit({
      id,
      edit: true,
    });
    setShowModal(true);
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: language === "en" ? "Are you sure?" : "Apa kamu yakin?",
      text: language === "en" ? "You won't be able to revert this!" : "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id)
          .then((data) => {
            setData((prevData) => prevData.filter((item) => item.id !== id));
            Swal.fire({
              text: language === "en" ? "Activity deleted" : "Aktivitas dihapus.",
              icon: "success"
            });
          })
          .catch((error) => {
            Swal.fire(language === "en" ? "Something wrong" : "Terjadi kesalahan");
          });
        setShowModal(false);
      }
    });
  }

  return (
    <ul className="list-group">
      {data?.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{item.title}</span>
          <div>
            <Link to={`/activity/${item.id}`} className="btn btn-secondary btn-sm mx-1">{language === "en" ? "Details" : "Rinci"}</Link>
            <button onClick={() => handleEdit(item.id)} className="btn btn-success btn-sm mx-1">{language === "en" ? "Edit" : "Ubah"}</button>
            <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">{language === "en" ? "Delete" : "Hapus"}</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ActivityList.propTypes = {
  data: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default ActivityList;
