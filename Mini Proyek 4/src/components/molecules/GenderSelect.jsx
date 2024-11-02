import RadioButton from "../atoms/RadioButton";
import Label from "../atoms/Label";

const GenderSelect = ({ name, title, selectedGender, onChange, validation, isLoading }) => {
   return (
      <div className="form-group mb-2">
         <Label htmlFor={name}>{title}</Label>
         <RadioButton 
            name={name} 
            value="male" 
            checked={selectedGender === "male"} 
            onChange={onChange} 
            label="Male" 
            disabled={isLoading}
         />
         <RadioButton 
            name={name} 
            value="female" 
            checked={selectedGender === "female"} 
            onChange={onChange} 
            label="Female" 
            disabled={isLoading}
         />
         {validation && <p className="text-danger mx-1">{validation}</p>}
      </div>
   );
};

export default GenderSelect;
