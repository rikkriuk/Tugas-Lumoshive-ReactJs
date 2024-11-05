import React, { useContext, useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";
import { AuthContext } from "../App";

const AuthContainer = () => {
  const { setToken } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const toggleLogin = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setError(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (isLogin) {
      login(form)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      register(form)
        .then(() => {
          alert("register success");
          setIsLogin(true);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <div>
      <LoginModal
      form={form}
        loading={loading}
        error={error}
        handleChange={handleChange}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default AuthContainer;