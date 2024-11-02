import TableHeader from "../molecules/TableHeader";
import TableBody from "../molecules/TableBody";

const Table = (props) => {
   const { headers, data, editStudent, handleDelete } = props;
   return (
      <table className="table table-striped table-hover">
         <TableHeader headers={headers} />
         <TableBody data={data} editStudent={editStudent} handleDelete={handleDelete} />
      </table>
   );
};

export default Table;
