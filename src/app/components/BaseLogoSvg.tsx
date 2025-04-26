// filepath: /Users/mr.briandesign/meme-generator/src/app/components/BaseLogoSvg.tsx
'use client';

import { SVGProps } from 'react';

interface BaseLogoSvgProps extends SVGProps<SVGSVGElement> {}

const BaseLogoSvg: React.FC<BaseLogoSvgProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#0052FF" />
      <path
        d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 15.59 8.41 18.5 12 18.5C15.59 18.5 18.5 15.59 18.5 12C18.5 8.41 15.59 5.5 12 5.5ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z"
        fill="white"
      />
    </svg>
  );
};

export default BaseLogoSvg;