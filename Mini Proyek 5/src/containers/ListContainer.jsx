import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem/ListItem";
import { api } from "../utils/api";
import LoadingSvg from "../components/Loading/Loading";

const ListContainer = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [refresh, setRefresh] = useState(false);

   useEffect(() => {
      setLoading(true);
      api.get("/students")
      .then((res) => {
         setData(res.data.data);
      }).catch((err) => {
         console.log(err);
      }).finally(() => {
         setLoading(false);
      })
   }, [refresh])

   const handleRefresh = () => {
      setRefresh((prev) => !prev);
   };

   if (loading) {
      return <>
         <LoadingSvg />
      </>
   }

   return (
      <>
         <ListItem 
            data={data}
            handleRefresh={handleRefresh}
            setData={setData}
         />
      </>
   )
}

export default ListContainer;