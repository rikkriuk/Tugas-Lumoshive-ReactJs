const RadioButton = (props) => {
   const { name, value, checked, onChange, label, disabled } = props;

   return (
      <div className="form-check">
         <input
            type="radio"
            className="form-check-input"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            id={`${name}-${value}`}
            disabled={disabled}
         />
         <label className="form-check-label" htmlFor={`${name}-${value}`}>
            {label}
         </label>
      </div>
   );
};

export default RadioButton;
