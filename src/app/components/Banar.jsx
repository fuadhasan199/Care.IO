"use client"
import Image from 'next/image';
import React from 'react';
import { GrLinkNext } from 'react-icons/gr';
import {motion} from "motion/react"

const Banar = () => {
    return (
       <section className="bg-gradient-to-br from-sky-300 via-white to-emerald-200">
      <div className="max-w-full mx-auto px-8 py-3">

             <div className="grid lg:grid-cols-2 items-center gap-14">

        <motion.div 
         initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
            

              
              <div >
            <p className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
              💙 Trusted Healthcare Platform
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-6">
              Your Health,
              <span className="block text-sky-600">
                Our Priority
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">
              Book appointments with experienced doctors, receive
              trusted healthcare services, and access quality medical
              care anytime, anywhere.
            </p>

            {/* Services */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Doctor Consultation",
                "Appointment Booking",
                "Emergency Support",
                "Medical Checkup",
              ].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 rounded-full bg-white border border-sky-200 text-gray-700 shadow-sm"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="mt-7 ">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold
               text-md transition duration-300 shadow-lg hover:shadow-xl flex  items-center gap-2">
                Book Now <GrLinkNext size={16} className="mt-1" />
              </button>
            </div>
          </div>

        </motion.div> 
    

         <motion.div
  initial={{
    opacity: 0,
    x: 80,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>  

<div className="flex justify-center">
            <div className="relative">
              {/* Background Blur */}
              <div className="absolute inset-0 bg-sky-200 blur-3xl opacity-30 rounded-full"></div>

              <Image
                src="https://i.ibb.co.com/N6WCTVGW/photo-1758691462071-757bca955439-q-80-w-1332-auto-format-fit-crop-ixlib-rb-4-1.jpg"
                alt="Doctor"
                width={580}        
                height={200}
                priority
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>




</motion.div>
          

          {/* Right Image */}
          

        </div>
      </div>
    </section>
    );
};

export default Banar;