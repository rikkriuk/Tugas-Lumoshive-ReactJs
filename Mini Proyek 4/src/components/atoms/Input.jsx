const Input = (props) => {
   const { type, name, placeholder, min = 0, max = 10, onChange, value, onFocus, disabled } = props;
   return (
      <input 
         type={type} 
         className="form-control" 
         name={name}
         placeholder={placeholder}
         min={min}
         max={max}
         onChange={onChange}
         value={value}
         onFocus={onFocus}
         disabled={disabled}
         required
      />
   );
};

export default Input;
