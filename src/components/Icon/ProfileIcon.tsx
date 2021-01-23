import * as React from 'react';

const SvgProfileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={16} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.295 5.791a5.274 5.274 0 01-5.294 5.292 5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 018.001.5a5.273 5.273 0 015.294 5.291zM8 20.501c-4.338 0-8-.704-8-3.424 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.72-3.685 3.4-8 3.4z" />
  </svg>
);

export default SvgProfileIcon;
