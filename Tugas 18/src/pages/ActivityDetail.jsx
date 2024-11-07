import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataById } from "../utils/api";
import useTimer from "../components/Timer";
import { LanguageContext } from "../App"

const ActivityDetail = () => {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  
  useEffect(() => {
    setLoading(true);
    getDataById(id)
    .then((data) => {
      setData(data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) {
    return <div className="container d-flex justify-content-center align-items-center mt-5">
      <p>{language === "en" ? "Loading..." : "Memuat..."}</p>
    </div>
  }

  if (!data) {
    return <div className="container d-flex justify-content-center align-items-center mt-5">
      <p>{language === "en" ? "Activity not found" : "Aktivitas tidak ditemukan"}</p>
    </div>
  }
  
  return (
    <div className="mt-4">
      <h2 className="text-primary">{data.title}</h2>
      <p className="text-muted">
        {data.description}
      </p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">{language === "en" ? `Time Spent: ${time} seconds` : `Waktu yang Dihabiskan: ${time} detik`}</p>
          <div className="btn-group">
            <button onClick={startTimer} className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> {language === "en" ? "Start" : "Mulai"}
            </button>
            <button onClick={stopTimer} className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> {language === "en" ? "Stop" : "Berhenti"}
            </button>
            <button onClick={resetTimer} className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> {language === "en" ? "Reset" : "Atur ulang"}
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
        <i className="bi bi-arrow-left"></i> {language === "en" ? "Back to List" : "Kembali ke daftar"}
      </button>
    </div>
  );
};

export default ActivityDetail;
