import React from "react";

const Banner = () => {
   return (
      <div className="flex justify-center items-center">
         <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-1 mt-5 w-11/12 xl:w-3/5 lg:w-4/5">
            <div className="h-full overflow-hidden relative">
               <img 
                  src="https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg" 
                  alt="" 
                  className="brightness-50 h-full w-full object-cover rounded-sm transition duration-200 hover:scale-110" 
               />
               <div className="absolute bottom-0 left-0 p-5">
                  <h2 className="text-white text-lg xl:text-2xl lg:text-2xl md:text-xl">Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!</h2>
                  <p className="text-white text-xs mt-3">21 March 2024</p>
               </div>
            </div>

            <div className="grid grid-rows-2 gap-1">
               <div className="overflow-hidden relative">
                  <img 
                     src="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg" 
                     alt="" 
                     className="brightness-50 w-full h-full object-cover rounded-sm transition duration-200 hover:scale-110" 
                  />
                  <div className="absolute bottom-0 left-0 p-5">
                     <h3 className="text-white text-lg xl:text-2xl lg:text-2xl md:text-xl">Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia</h3>
                  </div>
               </div>
               <div className="flex gap-1">
                  <div className="overflow-hidden w-1/2 h-full relative">
                     <img 
                        src="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg" 
                        alt="" 
                        className="brightness-50 h-full object-cover rounded-sm transition duration-200 hover:scale-110" 
                     />
                     <div className="absolute bottom-0 left-0 p-5">
                        <h3 className="text-white line-clamp-3 text-base xl:text-xl lg:text-xl md:text-lg">Implementasi AI di Tokopedia, dari Gudang Pintar sampai Sistem Rekomendasi</h3>
                     </div>
                  </div>
                  <div className="overflow-hidden w-1/2 h-full relative">
                     <img 
                        src="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg" 
                        alt="" 
                        className="brightness-50 h-full object-cover rounded-sm transition duration-200 hover:scale-110" 
                     />

                     <div className="absolute bottom-0 left-0 p-5">
                        <h3 className="text-white line-clamp-3 text-base xl:text-xl lg:text-xl md:text-lg">CPO Tokopedia Berbagi Cara Menerapkan Data-Driven Decision Making dalam Mengembangkan Produk</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
