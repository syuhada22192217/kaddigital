import React from 'react';

export const ButterfliesOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none">
      {/* Butterfly 1 */}
      <div
        className="absolute w-7 h-7 text-[#8B0000]/60 animate-petal"
        style={{
          left: '12%',
          top: '-5%',
          animationDuration: '14s',
          animationDelay: '0s',
        }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full fill-current transform scale-x-[-1] animate-spin-slow">
          <path d="M31.5 29 C24 14 9 10 3.5 17 C-1 24 1.5 36 12 41 C20 44.5 28 39 31.5 32 Z" opacity="0.85" />
          <path d="M31.5 34 C24 37 13 44 11 51 C9 58 18 61 25 55 C29 51 31.5 42 31.5 34 Z" opacity="0.7" />
          <path d="M32.5 29 C40 14 55 10 60.5 17 C65 24 62.5 36 52 41 C44 44.5 36 39 32.5 32 Z" opacity="0.85" />
          <path d="M32.5 34 C40 37 51 44 53 51 C55 58 46 61 39 55 C35 51 32.5 42 32.5 34 Z" opacity="0.7" />
        </svg>
      </div>

      {/* Butterfly 2 */}
      <div
        className="absolute w-6 h-6 text-amber-600/50 animate-petal"
        style={{
          left: '78%',
          top: '-10%',
          animationDuration: '18s',
          animationDelay: '3s',
        }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full fill-current">
          <path d="M31.5 29 C24 14 9 10 3.5 17 C-1 24 1.5 36 12 41 C20 44.5 28 39 31.5 32 Z" opacity="0.85" />
          <path d="M31.5 34 C24 37 13 44 11 51 C9 58 18 61 25 55 C29 51 31.5 42 31.5 34 Z" opacity="0.7" />
          <path d="M32.5 29 C40 14 55 10 60.5 17 C65 24 62.5 36 52 41 C44 44.5 36 39 32.5 32 Z" opacity="0.85" />
          <path d="M32.5 34 C40 37 51 44 53 51 C55 58 46 61 39 55 C35 51 32.5 42 32.5 34 Z" opacity="0.7" />
        </svg>
      </div>

      {/* Butterfly 3 */}
      <div
        className="absolute w-5 h-5 text-[#8B0000]/40 animate-petal"
        style={{
          left: '45%',
          top: '-8%',
          animationDuration: '16s',
          animationDelay: '7s',
        }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full fill-current">
          <path d="M31.5 29 C24 14 9 10 3.5 17 C-1 24 1.5 36 12 41 C20 44.5 28 39 31.5 32 Z" opacity="0.8" />
          <path d="M32.5 29 C40 14 55 10 60.5 17 C65 24 62.5 36 52 41 C44 44.5 36 39 32.5 32 Z" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
};
