import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import { postData, updateData } from "../utils/api";
import { LanguageContext } from "../App";

const ActivityForm = ({ showModal, setShowModal, form, setForm, handleChange, edit, setEdit }) => {
  const { language } = useContext(LanguageContext);
  const [ errors, setErrors ] = useState({});

  const handleClose = useCallback(() => {
    setShowModal(false);
    setEdit({
      id: null,
      edit: false,
    });
    setForm({
      title: "",
      description: "",
    });
    setErrors({});
  }, [setShowModal, setEdit, setForm]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.title) {
      newErrors.title = language === "en" ? "Title is required" : "Judul wajib diisi";
    }
    if (!form.description) {
      newErrors.description = language === "en" ? "Description is required" : "Deskripsi wajib diisi";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      try {
        if (edit?.edit) {
          await updateData(edit.id, form);
          Swal.fire({
            text: language === "en" ? "The activity has been updated successfully." : "Aktivitas berhasil diperbarui.",
            icon: "success",
          });
        } else {
          await postData(form);
          Swal.fire({
            text: language === "en" ? "The activity has been added successfully" : "Aktivitas berhasil ditambah.",
            icon: "success",
          });
        }
        setForm({
          title: "",
          description: "",
        });
        setErrors({});
      } catch (error) {
        console.error(error);
        Swal.fire({
          text: language === "en" ? "Something went wrong." : "Terjadi kesalahan.",
          icon: "error",
        });
      } finally {
        setEdit({
          id: null,
          edit: false,
        });
        setShowModal(false);
      }
    },
    [form, edit, language, setForm, setEdit, setShowModal]
  );

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {edit.edit
            ? language === "en" ? "Edit Activity" : "Ubah Aktivitas"
            : language === "en" ? "Add Activity" : "Tambah Aktivitas"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {language === "en" ? "Title" : "Judul"}
            </label>
            <input
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              id="title"
              value={form.title}
              name="title"
              onChange={handleChange}
            />
            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              {language === "en" ? "Description" : "Deskripsi"}
            </label>
            <textarea
              className={`form-control ${errors.description ? "is-invalid" : ""}`}
              id="description"
              rows="3"
              name="description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
          </div>
          <Button type="submit" variant={`${edit.edit ? "success" : "primary"}`}>
            {edit.edit ? (language === "en" ? "Update" : "Perbarui") : (language === "en" ? "Add" : "Tambah")}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

ActivityForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  form: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  edit: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    edit: PropTypes.bool,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default ActivityForm;
