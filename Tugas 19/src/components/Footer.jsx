import React from "react";

const Footer = () => {
   return (
   <footer className="bg-zinc-800 py-5 flex justify-center items-center">
      <div className="w-11/12 xl:w-3/5 lg:w-4/5 flex justify-between flex-col xl:flex-row lg:flex-row gap-4">
         <div>
            <p className="text-white">© 2009-2024@ PT Tokopedia</p>
         </div>
         <div>
            <ul className="flex flex-col xl:flex-row lg:flex-row gap-4">
               <li><a href="" className="text-white">Tentang Kami</a></li>
               <li><a href="" className="text-white">Pusat Penjual</a></li>
               <li><a href="" className="text-white">Mobile Apps</a></li>
               <li><a href="" className="text-white">Mitra</a></li>
               <li><a href="" className="text-white">Karir</a></li>
               <li><a href="" className="text-white">Tokopedia Care</a></li>
               <li><a href="" className="text-white">B2B Digital</a></li>
            </ul>
         </div>
      </div>
   </footer>
   )
}

export default Footer;