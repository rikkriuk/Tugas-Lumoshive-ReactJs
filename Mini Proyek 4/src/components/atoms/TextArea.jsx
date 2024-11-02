const Textarea = (props) => {
   const { name, placeholder, minLength, maxLength, rows = 4, onChange, value, disabled } = props;
   return (
      <textarea
         className="form-control"
         name={name}
         placeholder={placeholder}
         minLength={minLength}
         maxLength={maxLength}
         rows={rows}
         onChange={onChange}
         value={value}
         disabled={disabled}
      />
   );
};

export default Textarea;
