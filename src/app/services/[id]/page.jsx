
import BackButton from "@/app/components/Backbtn";
import Image from "next/image";


import { IoArrowBack } from "react-icons/io5";

async function GetService(id) {
  const res = await fetch(`http://localhost:3000/api/services/${id}`, { cache: "no-store" }) 
  return res.json()
}

const ViewDetails = async ({ params }) => {
  const { id } = await params
  const service = await GetService(id)
  
 
  return ( 
    
     
   <div className="max-w-5xl mx-auto my-8 p-1 sm:p-2 bg-gradient-to-br from-[#1F4D42] to-[#E8846B] rounded-3xl shadow-2xl"> 
   <BackButton />
   
      <div className="bg-white/95 backdrop-blur-md rounded-[22px] overflow-hidden shadow-sm">
      
        
        <div className="relative w-full h-72 sm:h-96"> 
          
          <Image
            src={service.image}
            alt={service.title}
            width={800}
            height={500}
            className="w-full h-full object-cover"
            priority
          /> 
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badge & Price overlay on image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1F4D42]/90 backdrop-blur-md rounded-full shadow-sm">
              {service.category}
            </span>
            <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1 text-sm font-semibold text-[#1F4D42]">
              <span>৳{service.pricePerDay}</span>
              <span className="text-xs font-normal text-slate-500">/ day</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {/* Title & Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1F4D42] tracking-tight">
              {service.title}
            </h1>
            
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full text-amber-700 font-semibold text-sm w-fit">
              <span className="text-amber-500">★</span>
              <span>{service.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {service.description}
          </p>

          <hr className="my-6 border-slate-100" />

          {/* Features & Covered Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F4D42]/80 mb-3">
                  Key Features
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-[#E8846B] bg-[#E8846B]/10 px-3 py-1.5 rounded-xl border border-[#E8846B]/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Covered Services */}
            {service.coveredServices && service.coveredServices.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F4D42]/80 mb-3">
                  What's Covered
                </h2>
                <ul className="space-y-2">
                  {service.coveredServices.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1F4D42]/10 text-[#1F4D42] flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-4 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1F4D42] hover:bg-[#163931] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#1F4D42]/20 hover:shadow-none transition-all duration-200 active:scale-[0.98]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;