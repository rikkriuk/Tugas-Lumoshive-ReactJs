import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataById } from "../utils/api";
import useTimer from "../components/Timer";

const ActivityDetail = () => {
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
      <p>Loading...</p>
    </div>
  }

  if (!data) {
    return <div className="container d-flex justify-content-center align-items-center mt-5">
      <p>Activity Not Found</p>
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
          <p className="card-text">Time Spent: {time} seconds</p>
          <div className="btn-group">
            <button onClick={startTimer} className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button onClick={stopTimer} className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button onClick={resetTimer} className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
