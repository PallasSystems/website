import React, { FC } from "react";

import { ImageProperty } from "@pallassystems/website-core";

export const AnalyticSVG: FC<ImageProperty> = ({
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
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <title>Data Analytics</title>
      <path d="M103.09 0C76.668 0 50.241 10.027 30.155 30.113c-40.172 40.171-40.218 105.74-.046 145.91 35.217 35.216 89.911 39.558 129.94 13.03l60.918 60.916a20.461 20.461 0 0 0 29.008 0 20.46 20.46 0 0 0 0-29.008l-60.872-60.916c26.497-40.023 22.127-94.732-13.077-129.94C155.94 10.02 129.512-.008 103.091-.008zm-.046 27.166c19.371.009 38.738 7.428 53.596 22.285 29.716 29.715 29.762 77.521.046 107.24-29.716 29.715-77.523 29.715-107.24 0-29.716-29.715-29.716-77.52 0-107.24 14.858-14.858 34.225-22.295 53.596-22.285zM48.388 126.39a2.947 2.947 0 0 0-2.532 4.236c10.265 21.49 32.226 36.328 57.602 36.328a63.86 63.86 0 0 0 15.932-2.026 2.947 2.947 0 0 0-.093-5.71c-25.496-5.694-48.907-16.881-68.975-32.23a2.947 2.947 0 0 0-1.933-.599z" />
    </svg>
  );
};
