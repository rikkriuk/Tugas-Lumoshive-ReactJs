import React from "react";

export default function ChatInput({ onChange, onSubmit, loading, query }) {
   return (
      <form className={`fixed-bottom p-3 bg-primary-subtle border-top shadow`}>
         <div className="input-group container">
            <input onChange={onChange} value={query} type="text" placeholder="Message Lumoshive AI" className="form-control border border-primary" disabled={loading}/> 
            <button onClick={onSubmit} className="btn btn-primary" disabled={loading}>
               <i className="bi bi-arrow-bar-up"></i>
            </button>
         </div>
      </form>
   )
}