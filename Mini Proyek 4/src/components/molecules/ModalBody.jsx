import React from "react";
import FormLabel from "./FormLabel";
import FormGroup from "./FormGroup";
import GenderSelect from "./GenderSelect";

const ModalBody = (props) => {
   const { onChange, onFocus, formData, formValidation, isLoading } = props;
   return (
      <div className="modal-body">
         <FormLabel 
            type="text" 
            name="name" 
            title="Name"
            placeholder="Enter your name" 
            onChange={onChange}
            value={formData.name}
            onFocus={onFocus}
            validation={formValidation.name}
            isLoading={isLoading}
         />
         <FormLabel 
            type="text" 
            name="class" 
            title="Class"
            placeholder="Enter your class" 
            onChange={onChange}
            value={formData.class}
            validation={formValidation.class}
            isLoading={isLoading}
         />
         <FormLabel 
            type="number" 
            name="year" 
            title="Year"
            placeholder="Enter your year" 
            min={2020} 
            max={2024} 
            onChange={onChange}
            value={formData.year}
            validation={formValidation.year}
            isLoading={isLoading}
         />
         <FormLabel 
            type="number" 
            name="nim" 
            title="NIM"
            placeholder="Enter your NIM" 
            onChange={onChange}
            value={formData.nim}
            validation={formValidation.nim}
            isLoading={isLoading}
         />
         <FormLabel 
            type="text" 
            name="guardian_name"
            title="Guardian Name"
            placeholder="Enter your guardian name"
            onChange={onChange}
            value={formData.guardian_name}
            validation={formValidation.guardian_name}
            isLoading={isLoading}
         />
         <FormLabel 
            type="date" 
            name="birthDate"
            title="Birth Date"
            onChange={onChange}
            value={formData.birthDate}
            validation={formValidation.birthDate}
            isLoading={isLoading}
         />
         <FormGroup 
            label="Address"
            name="address"
            title="Address"
            placeholder="Enter your address"
            minLength={20}
            maxLength={100}
            rows={5}
            onChange={onChange}
            value={formData.address}
            validation={formValidation.address}
            isLoading={isLoading}
         />
         <GenderSelect 
            name="gender"
            title="Gender"
            selectedGender={formData.gender}
            onChange={onChange}
            validation={formValidation.gender}
            isLoading={isLoading}
         />
      </div>
   )
};

export default ModalBody;
