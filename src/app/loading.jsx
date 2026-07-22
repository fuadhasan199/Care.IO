import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md transition-all duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing blur layer */}
        <div className="absolute w-20 h-20 bg-indigo-500/30 rounded-full blur-xl animate-pulse"></div>

        {/* Outer Animated Gradient Spinner */}
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-500 animate-spin"></div>

        {/* Inner Counter-Rotating Ring */}
        <div className="absolute w-10 h-10 rounded-full border-4 border-transparent border-b-indigo-300 border-l-indigo-300 animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Center Glowing Pulse Dot */}
        <div className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_12px_#818cf8] animate-ping"></div>
      </div>

      {/* Modern Animated Text */}
      <div className="mt-6 flex items-center gap-1">
        <span className="text-sm font-medium tracking-widest text-slate-200 uppercase">
          Loading
        </span>
        <span className="flex space-x-1 ml-1">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
        </span>
      </div>
    </div>
  );
}