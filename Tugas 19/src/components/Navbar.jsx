import React, { useRef } from "react";
import ListMenu from "./ListMenu";

const Navbar = () => {
   const pageRef = useRef(null);
   const menus = [
      { label: "HOME", items: [] },
      { label: "COMPANY", items: []},
      { label: "COMMUNITY", items: ["Seller Story", "Life at Tokopedia"] },
      { label: "STORIES", items: ["Behind The Scene", "Innovation", "Milestone", "Operation", "Product", "Social Impact"] },
      { label: "INSIGHT", items: [
            "Fashion Wanita", "Toys & Gaming", "Komputer & Laptop", "Otomotif", "Edukasi", 
            "Elektronik", "Kerja", "Perawatan Hewan", "Sports & Football", "Salam", 
            "Travel dan Kuliner", "Topik Seru Lainnya", "Top List", "Relationship", 
            "Kids and Parenting", "Keuangan", "Kesehatan", "Kecantikan", 
            "Home and Living", "Hobi dan Gaya Hidup", "Gaya dan Fashion Pria", 
            "Gadget dan Teknologi", "Entertainment"
         ] 
      },
      { label: "TOP LIST", items: [] },
      { label: "NEWSROOM", items: ["Press Release", "Siaran Pers"] },
      { label: "KALKUPEDIA", items: ["Kalkulator BMI"] },
   ];

   const scrollToPage = () => {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <header className="flex flex-col shadow-md">
         <nav ref={pageRef} className="bg-zinc-800 flex justify-around items-center h-8">
            <ul className="hidden xl:flex lg:flex md:flex items-center justify-center gap-3">
               <li><a href="" className="text-white no-underline text-xs">Jual Beli Online</a></li>
               <li><a href="" className="text-white no-underline text-xs">Official Store</a></li>
               <li><a href="" className="text-white no-underline text-xs">Produk Digital</a></li>
               <li><a href="" className="text-white no-underline text-xs">Tiket Kereta</a></li>
               <li><a href="" className="text-white no-underline text-xs">Tiket Pesawat</a></li>
               <li><a href="" className="text-white no-underline text-xs">Tiket Donasi</a></li>
               <li><a href="" className="text-white no-underline text-xs">Layanan Finansial</a></li>
               <li><a href="" className="text-white no-underline text-xs">Bantuan</a></li>
            </ul>

            <ul className="flex items-center justify-center gap-3">
               <li><a href="" className="text-white no-underline text-xs"><i className="bi bi-facebook"></i></a></li>
               <li><a href="" className="text-white no-underline text-xs"><i className="bi bi-instagram"></i></a></li>
               <li><a href="" className="text-white no-underline text-xs"><i className="bi bi-twitter"></i></a></li>
               <li><a href="" className="text-white no-underline text-xs"><i className="bi bi-youtube"></i></a></li>
            </ul>
         </nav>

         <div className="flex xl:flex-col lg:flex-col md:flex-col items-center justify-center gap-3 xl:mt-5 lg:mt-5 md:mt-5 mt-0 pb-1 bg-zinc-800 xl:bg-white lg:bg-white md:bg-white">
            <div className="flex justify-between items-center xl:block lg:block md:block w-11/12 xl:w-3/5 lg:w-2/3">
               <button className="xl:hidden lg:hidden md:hidden block text-2xl font-bold"><i className="bi bi-list text-white"></i></button>
               <h1 className="text-green-500 text-3xl xl:text-5xl lg:text-5xl md:text-3xl font-semibold my-2">Tokopedia</h1>

               <div className="flex items-center justify-center gap-5 pr-4">
                  <div className="hidden mt-4 w-full xl:flex lg:flex md:flex">
                     <ul className="flex justify-start pt-2 w-full flex-wrap">
                        {menus.map((menu, index) => (
                           <ListMenu key={index} label={menu.label} items={menu.items} />
                        ))}
                     </ul>
                  </div>
                  <div className="xl:mt-5 md:mt-5 lg:mt-5">
                     <button>
                        <i className="bi bi-search text-white lg:text-black xl:text-black md:text-black text-xl"></i>
                     </button>
                  </div>

               </div>
            </div>

            <button onClick={scrollToPage} className="bg-blue-400 fixed bottom-0 right-0 mr-2 mb-2 px-3 py-2 z-50">
               <i className="bi bi-caret-up-fill text-white"></i>
            </button>
         </div>
      </header>
   );
};

export default Navbar;
