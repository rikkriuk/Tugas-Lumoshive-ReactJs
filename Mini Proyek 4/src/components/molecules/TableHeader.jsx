import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";

const TableHeader = ({ headers }) => {
   return (
      <thead className="table-dark">
         <TableRow>
            {headers.map((header, index) => (
               <TableCell key={index} isHeader={true}>{header}</TableCell>
            ))}
         </TableRow>
      </thead>
   );
};

export default TableHeader;
