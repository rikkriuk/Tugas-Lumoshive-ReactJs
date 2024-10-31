import React from "react"

export default function LoginModal({ isLogin, toggleLogin, handleChange, handleSubmit, error, loading, form, darkMode }) {
   return (
      <div className={`modal show d-block ${darkMode && "bg-dark"}`} tabIndex="-1">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
               </div>
               <div className="modal-body">
                  {error && <div className="alert alert-danger">
                     <i className="bi bi-exclamation-circle me-2"></i> {error}
                  </div>}
                  <form>
                     <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>

                        <input 
                           type="text" 
                           id="username" name="username"
                           value={form.username} className="form-control"required minLength={6} maxLength={50}
                           disabled={loading}
                           onChange={handleChange}
                        />
                     </div>

                     <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>

                        <input 
                           type="password" id="password" name="password"
                           value={form.password} className="form-control"
                           onChange={handleChange}
                           disabled={loading}
                           required 
                        />
                     </div>

                     <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100" disabled={loading}>
                        <i className="bi bi-shield-lock me-2"></i>
                        {isLogin ? "Login" : "Register"}
                     </button>

                     <button onClick={toggleLogin} className="btn btn-link w-100 mt-3 text-decoration-none" disabled={loading}>{isLogin ? "Register" : "Login"}</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}