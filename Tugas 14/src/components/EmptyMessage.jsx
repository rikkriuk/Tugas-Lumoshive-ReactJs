export default function EmptyMessage({ darkMode }) {
   return (
   <div className={`container d-flex justify-content-center align-items-center message-cstm ${darkMode && "bg-dark"}`}>
      <div className="bg-primary-subtle shadow-sm rounded-3 d-flex flex-column align-items-center justify-content-center p-3">
         <i className="bi bi-robot fs-1 "></i>
         <h4 className="p-3 border m-0 p-0">
            Hello, I'm Lumoshive AI
         </h4>
         <p>What can I help you?</p>
      </div>
   </div>

   )
};