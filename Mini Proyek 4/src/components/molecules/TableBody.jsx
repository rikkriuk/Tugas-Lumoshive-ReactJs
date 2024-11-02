import TableCell from "../atoms/TableCell";
import TableRow from "../atoms/TableRow";
import Button from "../atoms/Button";

const TableBody = (props) => {
   const { data, editStudent, handleDelete } = props;
   return (
      <tbody>
         {data.map((row, index) => (
            <TableRow key={index}>
               <TableCell>{index + 1}</TableCell>
               <TableCell>{row.name}</TableCell>
               <TableCell>{row.class}</TableCell>
               <TableCell>{row.year}</TableCell>
               <TableCell>{row.nim}</TableCell>
               <TableCell>{row.guardian_name}</TableCell>
               <TableCell>{row.birthDate}</TableCell>
               <TableCell>{row.address}</TableCell>
               <TableCell>{row.gender}</TableCell>
               <TableCell>
                  <Button id={row.id} onClick={editStudent} className={"btn btn-warning me-2"}>Edit</Button>
                  <Button id={row.id} onClick={handleDelete} className={"btn btn-danger"}>Delete</Button>
               </TableCell>
            </TableRow>
         ))}
      </tbody>
   );
}

export default TableBody;
