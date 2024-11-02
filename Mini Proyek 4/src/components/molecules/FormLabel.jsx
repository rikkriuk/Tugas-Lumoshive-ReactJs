import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FormLabel = (props) => {
   const { type, name, title, placeholder, onChange, value, validation, isLoading } = props;
   return (
      <div className="mb-2">
         <Label htmlFor={type}>{title}</Label>
         <Input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            disabled={isLoading}
         />
         {validation && <p className="text-danger mx-1">{validation}</p>}
      </div>
   )
}

export default FormLabel;