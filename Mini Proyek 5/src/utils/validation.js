import React from "react";

const formValidation = (form, setErrorForm, language) => {
  let errorForm = {};

  if (form.name.trim() === "") {
    errorForm.name =
      language === "en" ? "Name cannot be empty" : "Nama tidak boleh kosong";
  }

  if (form.class.trim() === "") {
    errorForm.class =
      language === "en" ? "Class cannot be empty" : "Kelas tidak boleh kosong";
  }

  if (form.year.trim() === "") {
    errorForm.year =
      language === "en" ? "Year cannot be empty" : "Tahun tidak boleh kosong";
  } else {
    const year = Number(form.year);
    if (year < 2000 || year > 2024) {
      errorForm.year =
        language === "en"
          ? "Year must be between 2000 and 2024"
          : "Tahun harus antara 2000 sampai 2024";
    }
  }

  if (form.nim.trim() === "") {
    errorForm.nim =
      language === "en" ? "NIM cannot be empty" : "NIM tidak boleh kosong";
  }

  if (form.guardian_name.trim() === "") {
    errorForm.guardian_name =
      language === "en"
        ? "Guardian name cannot be empty"
        : "Nama wali tidak boleh kosong";
  }

  if (form.birthDate === "") {
    errorForm.birthDate =
      language === "en"
        ? "Birth date cannot be empty"
        : "Tanggal lahir tidak boleh kosong";
  }

  if (form.address.trim() === "") {
    errorForm.address =
      language === "en"
        ? "Address cannot be empty"
        : "Alamat tidak boleh kosong";
  } else {
    if (form.address.length <= 20) {
      errorForm.address =
        language === "en"
          ? "Address must be at least 20 characters"
          : "Alamat setidaknya harus 20 karakter";
    }
  }

  if (form.gender === "") {
    errorForm.gender =
      language === "en"
        ? "Gender cannot be empty"
        : "Jenis kelamin tidak boleh kosong";
  }

  setErrorForm(errorForm);
  return Object.keys(errorForm).length;
};

export default formValidation;
