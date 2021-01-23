import * as React from 'react';

const SvgLoginIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={25} height={25} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.886 0h5.04C17.444 0 19.5 2 19.5 4.44v11.12c0 2.45-2.055 4.44-4.595 4.44h-5.03c-2.519 0-4.584-1.99-4.584-4.43v-4.8h6.402l-1.652 1.6c-.31.3-.31.79 0 1.09a.81.81 0 00.568.22c.196 0 .403-.07.558-.22l3.015-2.91a.736.736 0 00.237-.55c0-.2-.082-.4-.237-.54l-3.015-2.91a.816.816 0 00-1.126 0c-.31.3-.31.79 0 1.09l1.652 1.59H5.291V4.45C5.29 2 7.356 0 9.886 0zM.5 10c0-.42.355-.77.782-.77H5.29v1.54H1.28A.776.776 0 01.5 10z"
      fill="#fff"
    />
  </svg>
);

export default SvgLoginIcon;
