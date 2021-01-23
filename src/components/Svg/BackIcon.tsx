import * as React from 'react';

const SvgBackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={19} height={19} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 16a8 8 0 118-8 8.009 8.009 0 01-8 8zM8 1.6a6.4 6.4 0 106.4 6.544V9.57 8A6.407 6.407 0 008 1.6zM8 12L4 8l4-4 1.128 1.128L7.064 7.2H12v1.6H7.064l2.064 2.072L8 12z"
      fill="#fff"
    />
  </svg>
);

export default SvgBackIcon;
