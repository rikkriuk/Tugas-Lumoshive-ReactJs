import React, { Component } from "react";
import Markdown from "react-markdown";

export default class ChatMessage extends Component {
   constructor(props) {
      super(props)
      this.state = {
         text: "",
         index: 0,
         intervalId: null,
      }
   }

   componentDidMount() {
      this.startTyping();
    }

   componentWillUnmount() {
      clearInterval(this.state.intervalId); 
   }

   startTyping = () => {
      const { message } = this.props;
      const typingSpeed = 10;
  
      const intervalId = setInterval(() => {
        if (this.state.index < message.length - 1) {
          this.setState((prevState) => ({
            text: prevState.text + message[prevState.index],
            index: prevState.index + 1,
          }));
        } else {
          clearInterval(intervalId);
        }
      }, typingSpeed);
  
      this.setState({ intervalId });
   }

   render() {
      const { message, index, lastIndex } = this.props;
      return (
      <div className="chat-message-cstm">
         {/* user question */}
         <div className="container d-flex justify-content-end mt-3">
            <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle mb-3">
               <i className="bi bi-person-circle me-2"></i>
               <strong>Question:</strong> {this.props.query}
            </div>
         </div>

         {/* ai response */}
         <div className="container d-flex justify-content-start">
            <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle">
               <i className="bi bi-robot me-2"></i>
               <strong>Answer:</strong>
               <div>
                  <Markdown>{index === lastIndex ? this.state.text : message}</Markdown>
               </div>
            </div>
         </div>
      </div>
      )
   }
}