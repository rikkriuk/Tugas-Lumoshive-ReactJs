import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Nabvar";
import { queryAI, logout } from "../utils/api";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";
import EmptyMessage from "../components/EmptyMessage";

export default class ChatContainer extends Component {
   state = {
      messages: [],
      loading: false,
      error: null,
      query: "",
   }

   handleQuery = (e) => {
      e.preventDefault();
      const { query } = this.state;
      this.setState({
         loading: true,
         error: null,
      })

      queryAI({ query }, this.props.token)
      .then((res) => {
         this.setState({
            messages: [...this.state.messages, {query, data: res}],
            query: "",
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
         })
      })
   }

   handleChange = (e) => {
      this.setState({
         query: e.target.value,
      })
   }

   handleLogout = () => {
      logout(this.props.token)
      .then(() => {
         this.props.setToken(null);
         localStorage.removeItem("token");
      })
   }

   renderMessages() {
      return this.state.messages.map((message, index) => (
         <ChatMessage 
            key={index} 
            message={message.data.data} 
            query={message.query} 
            index={index} 
            lastIndex={this.state.messages.length - 1}
         />
      ));
   }

   render() {
      return (
         <div className={`min-vh-100 ${this.props.darkMode && "bg-dark"}`}>
           <Navbar setToken={this.props.setToken} handleLogout={this.handleLogout} toggleDarkMode={this.props.toggleDarkMode} darkMode={this.props.darkMode} />
           {this.state.error ? (
               <ErrorMessage error={this.state.error} darkMode={this.props.darkMode} />
            ) : this.state.loading ? (
               <LoadingMessage darkMode={this.props.darkMode} />
            ) : this.state.messages.length === 0 ? (
               <EmptyMessage darkMode={this.props.darkMode} />
            ) : (
               this.renderMessages()
            )}
           <ChatInput onChange={this.handleChange} onSubmit={this.handleQuery} loading={this.state.loading} query={this.state.query} darkMode={this.props.darkMode} />
         </div>
      )
   }
}