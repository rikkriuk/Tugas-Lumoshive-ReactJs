import React from "react";

const ListMenu = ({ label, items }) => {
   return (
      <li className="relative group z-50 text-base font-bold px-4 py-4 border-b-2 border-transparent hover:border-blue-700">
         {items.length === 0 ? (
            <a href="" className="whitespace-nowrap">
               {label}
            </a>
         ) : (
            <>
               <button className="text-base font-bold flex items-center">
                  {label}
                  <i className="bi bi-caret-down-fill ml-1"></i>
               </button>
               <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 hidden group-hover:block">
                  <ul className="py-2">
                     {items.map((item, index) => (
                        <li key={index}>
                           <a href="#" className="block font-normal px-4 py-1 hover:text-blue-400">
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </>
         )}
      </li>
   )
};

export default ListMenu;