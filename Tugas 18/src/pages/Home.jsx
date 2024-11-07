import React, { useContext, useEffect, useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import { getData } from "../utils/api";
import useForm from "../hooks/useForm";
import { LanguageContext } from "../App";

const Home = () => {
  const { language } = useContext(LanguageContext)
  const [ showModal, setShowModal ] = useState(false);
  const [ isEdit, setIsEdit ] = useState({ id: null, edit: false});
  const [ data, setData ] = useState([]);
  const [ form, setForm, handleChange ] = useForm({
    title: "",
    description: "",
  });

  useEffect(() => {
    getData()
    .then((data) => {
      setData(data);
    })
  }, [showModal])

  return (
    <div>
      <h1 className="my-4">{language === "en" ? "Daily Activity Manager" : "Manajer Aktivitas Harian"}</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        {language === "en" ? "Add Activity" : "Tambah Aktivitas"}
      </button>
      <ActivityList 
        setShowModal={setShowModal} 
        data={data}
        setForm={setForm}
        setData={setData}
        setEdit={setIsEdit}
      />
      <ActivityForm 
        showModal={showModal} 
        setShowModal={setShowModal} 
        form={form}
        handleChange={handleChange}
        edit={isEdit}
        setForm={setForm}
        setEdit={setIsEdit}
      />
    </div>
  );
};

export default Home;
