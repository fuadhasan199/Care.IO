"use client";
import React from "react";
// Swiper CSS
import "swiper/css";
import "swiper/css/pagination"; // Pagination styles

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Success = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      district: "Dhaka",
      service: "Baby Care",
      rating: 5,
      review:
        "The caregiver was incredibly kind and professional. My baby felt safe and comfortable throughout the service.",
    },
    {
      id: 2,
      name: "Rakib Hasan",
      district: "Rangpur",
      service: "Elderly Care",
      rating: 5,
      review:
        "Excellent support for my father. The caregiver was patient, caring, and always on time.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      district: "Chattogram",
      service: "Sick Care",
      rating: 4.9,
      review:
        "Highly professional service during recovery. Everything was handled with great care.",
    },
    {
      id: 4,
      name: "Imran Hossain",
      district: "Khulna",
      service: "Baby Care",
      rating: 5,
      review:
        "Booking was very easy and the caregiver exceeded our expectations. Highly recommended.",
    },
    {
      id: 5,
      name: "Fatema Akter",
      district: "Rajshahi",
      service: "Elderly Care",
      rating: 4.8,
      review:
        "Very trustworthy platform. My grandmother received excellent daily assistance.",
    },
    {
      id: 6,
      name: "Mahmud Rahman",
      district: "Sylhet",
      service: "Sick Care",
      rating: 5,
      review:
        "Fast response and reliable service. The caregiver was experienced and compassionate.",
    },
    {
      id: 7,
      name: "Ayesha Rahman",
      district: "Barishal",
      service: "Baby Care",
      rating: 5,
      review:
        "Care.io made finding a caregiver simple. We are very satisfied with the quality of care.",
    },
    {
      id: 8,
      name: "Sabbir Islam",
      district: "Mymensingh",
      service: "Elderly Care",
      rating: 4.9,
      review:
        "Professional, friendly, and dependable. I would definitely use Care.io again.",
    },
  ];

  return (
    <div className="max-w-full mx-auto px-4 py-8"> 
     <span className="font-bold m-5 p-5 text-xl"> Success metrics : </span>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1} 
        loop={true} 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="pb-12" 
      > 
      
       
        {reviews.map((review) => (
          <SwiperSlide key={review.id}> 
         

            <div className="h-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-md hover:shadow-xl transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 text-lg">★★★★★</span>

                <span className="text-sm font-semibold bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 px-3 py-1 rounded-full">
                  {review.rating}
                </span>
              </div>

              {/* User */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {review.name}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  📍 {review.district}
                </p>

                <p className="mt-2 inline-block rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-sm font-medium">
                  {review.service}
                </p>
              </div>

              {/* Review */}
              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-7">
                {review.review}
              </p>

              {/* Verified */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✔ Verified Patient
                </span>

              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Success;