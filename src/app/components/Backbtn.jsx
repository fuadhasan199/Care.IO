 
'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-5 m-5 inline-flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity cursor-pointer"
    >
      <IoArrowBack size={25} />
      <span>Back</span>
    </button>
  );
}