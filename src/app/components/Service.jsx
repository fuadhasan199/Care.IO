import Image from 'next/image';
import React from 'react';

const Service = () => { 

const services = [
  {
    id: 1,
    title: "Baby Care",
    description:
      "Professional caregivers provide safe, loving, and attentive care for your little ones.",
    icon: "👶",
    image: "https://i.ibb.co.com/Kc5htRg2/photo-1470116945706-e6bf5d5a53ca-q-80-w-1074-auto-format-fit-crop-ixlib-rb-4-1.jpg",
  },
  {
    id: 2,
    title: "Elderly Care",
    description:
      "Compassionate support for seniors with daily assistance, companionship, and personal care.",
    icon: "👴",
    image: "https://i.ibb.co.com/H8GCkg5/photo-1762955911431-4c44c7c3f408-q-80-w-1121-auto-format-fit-crop-ixlib-rb-4-1.jpg",
  },
  {
    id: 3,
    title: "Sick Care",
    description:
      "Dedicated caregivers offer reliable assistance and comfort during illness and recovery.",
    icon: "🩺",
    image: "https://i.ibb.co.com/9kMJ0ccg/photo-1593086586351-1673fca190cf-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg",
  },
]

    return ( 

<div className=""> 

    <span className="m-10 text-2xl font-bold font-sans text-slate-900">
      Services overview:
    </span>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 m-8 '> 
      

        {services.map((service) => (
           <div
      key={service.id}
      className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      
      <div className="relative h-60 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill 
          
          priority
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

       
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800 flex items-center justify-center text-2xl shadow-md">
          {service.icon}
        </div>
      </div>

      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
          {service.description}
        </p>

        
      </div>
    </div>
        ))}
            



            
        </div> 
        </div>
    );
};

export default Service;