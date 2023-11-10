import React, { FC } from "react";

import { ImageProperty } from "@pallassystems/website-core";

export const DataEngSVG: FC<ImageProperty> = ({
  id,
  className,
  height,
  width,
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      width={undefined === width || null === width ? "140" : width}
      height={undefined === height || null === height ? "140" : height}
      className={undefined === className || null === className ? "" : className}
      viewBox="-0.5 -0.5 246 226"
      fill="currentColor"
    >
      <title>Data Engineering</title>
      <g stroke="currentColor" strokeMiterlimit="10">
        <path
          d="M93 113h20q10 0 10-10V71q0-10 6.6-10h6.59"
          fill="none"
          strokeWidth="5"
          pointerEvents="stroke"
        />
        <path
          d="m144.44 61-11 5.5 2.75-5.5-2.75-5.5Z"
          strokeWidth="5"
          pointerEvents="all"
        />
        <path
          d="M93 113h20q10 0 10 10v48q0 10 8.58 10h8.57"
          fill="none"
          strokeWidth="5"
          pointerEvents="stroke"
        />
        <path
          d="m148.4 181-11 5.5 2.75-5.5-2.75-5.5Z"
          strokeWidth="5"
          pointerEvents="all"
        />
        <path
          d="M3 81c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M3 90c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M3 99c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M3 81c0-24 90-24 90 0v64c0 24-90 24-90 0ZM153 21c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 30c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 39c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 21c0-24 90-24 90 0v64c0 24-90 24-90 0ZM153 141c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 150c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 159c0 18 90 18 90 0"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
        <path
          d="M153 141c0-24 90-24 90 0v64c0 24-90 24-90 0Z"
          fill="none"
          strokeWidth="6"
          pointerEvents="all"
        />
      </g>
    </svg>
  );
};
