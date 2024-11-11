import React, { useEffect, useState } from "react";

const ListItem = ({ name, data, setData }) => {
   const [pageData, setPageData] = useState([]);
   const itemsPerPage = 3;

   useEffect(() => {
      const startIndex = (data.page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentPageData = data.data.slice(startIndex, endIndex);
      setPageData(currentPageData);
   }, [data.page, data.data]);

   const handlePrev = () => {
      if (data.page > 1) {
         setData((prevState) => ({
            ...prevState,
            page: prevState.page - 1
         }));
      }
   };

   const handleNext = () => {
      if (data.page < Math.ceil(data.data.length / itemsPerPage)) {
         setData((prevState) => ({
            ...prevState,
            page: prevState.page + 1
         }));
      }
   };

   return (
      <section className="flex justify-center items-center"> 
         <div className="w-11/12 xl:w-3/5 lg:w-4/5">
            <div className="flex justify-between items-center border-b-2 border-green-500 my-5">
               <div className="bg-green-500 px-3 py-1">
                  <a href="" className="text-white">{name}</a>
               </div>

               {name === "Siaran Pers" && (
                  <div>
                     <ul className="flex gap-5">
                        <li><a href="#" className="hover:text-green-500">Founder's Letter</a></li>
                        <li><a href="#" className="hover:text-green-500">Milestone</a></li>
                     </ul>
                  </div>
               )}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
               {pageData.map((item, index) => (
                  <div key={index} className="hover:text-blue-400">
                     <div className="relative">
                        <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                        <div className="absolute left-0 bottom-0 bg-slate-950 bg-opacity-40 text-white p-1 px-2 ml-2 mb-2 rounded-sm">
                           <p className="text-xs">{name}</p>
                        </div>
                     </div>
                     <a href="" className="font-bold my-2 line-clamp-2">{item.title}</a>
                     <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
               ))}
            </div>
            <div className="flex gap-2 my-6">
               <button onClick={handlePrev} disabled={data.page === 1} className="border text-slate-300 border-slate-300 px-1 hover:bg-green-500 hover:text-white">
                  <i className="bi bi-arrow-left"></i>
               </button>
               <button onClick={handleNext} disabled={data.page >= Math.ceil(data.data.length / itemsPerPage)} className="border text-slate-300 border-slate-300 px-1 hover:bg-green-500 hover:text-white">
                  <i className="bi bi-arrow-right"></i>
               </button>
            </div>
         </div>

      </section>
   );
};

export default ListItem;
