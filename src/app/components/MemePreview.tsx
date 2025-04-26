'use client';

import { forwardRef } from 'react';

interface MemePreviewProps {
  location: string;
}

const MemePreview = forwardRef<HTMLDivElement, MemePreviewProps>(
  ({ location }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden flex flex-col items-center justify-start"
      >
        {/* HELLO.png Image */}
        <img
          src="/images/HELLO.png"
          alt="HELLO"
          className="w-full object-cover"
        />

        {/* Location Text */}
        <div className="absolute" style={{ bottom: '60px', textAlign: 'center', width: '100%' }}>
          <p
            className="text-3xl font-bold text-black"
            style={{ fontFamily: "'Cal Sans', sans-serif" }}
          >
            {location || "Location"}
          </p>
        </div>
      </div>
    );
  }
);

export default MemePreview;