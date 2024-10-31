import React, { Component } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";
import Swal from "sweetalert2";

export default class AuthContainer extends Component {
   state = {
      isLogin: true,
      form: {
         username: "",
         password: ""
      },
      loading: false,
      error: null,
   }

   componentDidMount() {
      const token = localStorage.getItem("token");
      if (token) {
         this.props.setToken(token);
      }
   }

   toggleLogin = (e) => {
      e.preventDefault();
      this.setState({
         isLogin: !this.state.isLogin,
         error: null,
         form: {
            username: "",
            password: ""
         }
      })
   }

   handleChange = (e) => {
      this.setState({
         form: {
            ...this.state.form,
            [e.target.name]: e.target.value
         }
      })
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({
         loading: true,
      })
      
      if (this.state.isLogin) {
         login(this.state.form)
         .then((res) => {
            localStorage.setItem("token", res.accessToken);
            this.props.setToken(res.accessToken);
            this.setState({
               error: null,
            })
         })
         .catch((error) => {
            this.setState({
               error: error.response.data.error,
            })
         })
         .finally(() => {
            this.setState({
               loading: false,
               form: {
                  username: "",
                  password: ""
               }
            })
         })
      } else {
         register(this.state.form)
         .then(() => {
            this.setState({
               isLogin: true,
               error: null,
            })

            Swal.fire({
               title: "Registration Successful!",
               text: "You have successfully registered.",
               icon: "success",
           })
         })
         .catch((error) => {
            this.setState({
               error: error.response.data.error
            })
         })
         .finally(() => {
            this.setState({
               loading: false,
               form: {
                  username: "",
                  password: ""
               }
            })
         })
      }
   }

   render() {
      return (
         <div>
           <LoginModal 
               isLogin={this.state.isLogin} toggleLogin={this.toggleLogin}
               handleChange={this.handleChange} 
               handleSubmit={this.handleSubmit}
               error={this.state.error}
               loading={this.state.loading}
               form={this.state.form}
               darkMode={this.props.darkMode}
           />
         </div>
      )
   }
}