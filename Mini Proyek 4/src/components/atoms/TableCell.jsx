const TableCell = (props) => {
   const { isHeader, children } = props;
   if (isHeader) {
      return <th scope="col">{children}</th>
   }

   return (
      <td>{children}</td>
   )
}

export default TableCell;