const Label = (props) => {
   const { children, htmlFor } = props;
   return (
      <label 
         htmlFor={htmlFor} 
         className="form-label">
         {children}
      </label>
   )
}

export default Label;