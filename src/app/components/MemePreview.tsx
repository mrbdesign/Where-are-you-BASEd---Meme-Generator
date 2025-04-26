import { forwardRef } from "react";
import Image from "next/image"; // Import Next.js Image component

interface MemePreviewProps {
  location: string;
}

const MemePreview = forwardRef<HTMLDivElement, MemePreviewProps>(
  ({ location }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden"
      >
        <Image
          src="/images/HELLO.png"
          alt="HELLO"
          layout="fill"
          objectFit="cover"
        />
        {/* Center the location text on the white portion */}
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <p className="text-5xl font-bold text-black">
            {location || "Location"}
          </p>
        </div>
      </div>
    );
  }
);

// Add displayName to avoid ESLint error
MemePreview.displayName = "MemePreview";

export default MemePreview;