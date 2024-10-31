export default function ErrorMessage({ error }) {
   return (
   <div className="container d-flex justify-content-center pt-5 .message-cstm">
      <div className="alert alert-danger" role="alert">
         <i className="bi bi-exclamation-triangle-fill me-2"></i>
         {error}
      </div>
   </div>
   )
};