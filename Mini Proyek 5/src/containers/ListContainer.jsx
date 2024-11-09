import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem/ListItem";
import { getData } from "../utils/api";

const ListContainer = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      getData("/students")
      .then((res) => {
         setData(res.data);
      }).catch((err) => {
         console.log(err);
      }).finally(() => {
         setLoading(false);
      })
   }, [])

   if (loading) {
      return <>
         <p>Loading...</p>
      </>
   }

   return (
      <>
         <ListItem 
            data={data}
         />
      </>
   )
}

export default ListContainer;