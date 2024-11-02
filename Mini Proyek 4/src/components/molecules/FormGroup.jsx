// components/molecules/FormGroup.js
import Label from '../atoms/Label';
import Textarea from '../atoms/TextArea';

const FormGroup = (props) => {
   const { label, name, title, placeholder, minLength, maxLength, rows, onChange, value, validation, isLoading } = props;

   return (
      <div className="form-group mb-2">
         <Label htmlFor={name}>{label}</Label>
         <Textarea 
            name={name} 
            placeholder={placeholder} 
            minLength={minLength} 
            maxLength={maxLength} 
            rows={rows} 
            onChange={onChange}
            title={title}
            value={value}
            disabled={isLoading}
         />
         {validation && <p className="text-danger mx-1">{validation}</p>}
      </div>
   );
};

export default FormGroup;
