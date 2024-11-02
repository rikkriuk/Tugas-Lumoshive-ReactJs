import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBar = (props) => {
   const { type, placeholder, onClick, onSearch, handleChangeQuery } = props;
   return (
      <div className="input-group mt-4 mb-3">
         <Input 
            type={type} 
            placeholder={placeholder} 
            onChange={handleChangeQuery}
         />

         <div>
            <Button onClick={onSearch} className="btn btn-secondary mx-2">Search</Button>
            <Button onClick={onClick} className="btn btn-primary">Add Student</Button>
         </div>
      </div>
   );
};

export default SearchBar;