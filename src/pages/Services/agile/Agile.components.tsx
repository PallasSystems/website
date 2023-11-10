import React, { FC } from "react";

import { ImageProperty } from "@pallassystems/website-core";

export const AgileSVG: FC<ImageProperty> = ({
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
      viewBox="-60 -100 590 590"
      fill="currentColor"
    >
      <title>Agile</title>
      <path d="M10 372.5h405a9.996 9.996 0 0 0 7.071-2.929l65-65c1.912-1.913 2.904-4.47 2.905-7.071H490v-245c0-5.522-4.477-10-10-10H10c-5.523 0-10 4.478-10 10v310c0 5.522 4.477 10 10 10zm415-34.143V307.5h30.858L425 338.357zM20 62.5h450v225h-55c-5.523 0-10 4.478-10 10v55H20v-290z" />
      <path d="M350 92.5H250c-5.523 0-10 4.478-10 10v15h-25c-5.523 0-10 4.478-10 10v75h-80v-35h55c5.523 0 10-4.478 10-10v-60c0-5.522-4.477-10-10-10H60c-5.523 0-10 4.478-10 10v60c0 5.522 4.477 10 10 10h45v45c0 5.522 4.477 10 10 10h90v70c0 5.522 4.477 10 10 10h25v10c0 5.522 4.477 10 10 10h100c5.523 0 10-4.478 10-10v-50c0-5.522-4.477-10-10-10H250c-5.523 0-10 4.478-10 10v20h-15v-60h15v10c0 5.522 4.477 10 10 10h100c5.523 0 10-4.478 10-10v-50c0-5.522-4.477-10-10-10H250c-5.523 0-10 4.478-10 10v20h-15v-65h15v15c0 5.522 4.477 10 10 10h100c5.523 0 10-4.478 10-10v-50c0-5.522-4.477-10-10-10zm-280 55v-40h100v40H70zm190 125h80v30h-80v-30zm0-80h80v30h-80v-30zm80-50h-80v-30h80v30zM50 247.5h75v20H50zM50 277.5h75v20H50zM50 307.5h130v20H50z" />
      <path d="M135 247.5h20v20h-20zM380 92.5h25v20h-25zM420 92.5h25v20h-25zM380 122.5h25v20h-25zM420 122.5h25v20h-25zM380 152.5h25v20h-25zM420 152.5h25v20h-25zM380 182.5h25v20h-25zM420 182.5h25v20h-25zM483.162 408.013l-60-20a9.983 9.983 0 0 0-3.162-.498v-.015H10c-5.523 0-10 4.478-10 10v40c0 5.522 4.477 10 10 10h410.001a9.995 9.995 0 0 0 3.161-.513l60-20a10.001 10.001 0 0 0 0-18.974zM60 427.5H20v-20h40v20zm350 0H80v-20h330v20zm20-3.874v-12.252l18.377 6.126L430 423.626z" />
    </svg>
  );
};

export const FailFastSVG: FC<ImageProperty> = ({
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
      viewBox="-10 0 75 65"
      fill="currentColor"
    >
      <title>Fail Fast</title>
      <g id="g8" transform="matrix(-1 0 0 1 63.704 0)">
        <g id="g6">
          <path
            d="M23.926 12.752c3.47-.402 5.963-3.572 5.564-7.082-.396-3.51-3.532-6.029-7-5.628-3.47.402-5.961 3.572-5.564 7.082.395 3.51 3.53 6.029 7 5.628z"
            id="path2"
          />
          <path
            d="M60.258 57.826c-4.91-8.431-20.181-35.671-22.716-40.117 4.949-1.597 9.471-.139 13.027 4.899 2.892 4.098 9.656.169 6.729-3.979-6.882-9.75-17.146-12.171-27.421-6.001-.43.257-2.355 1.333-2.789 1.594-6.391 3.835-12.325 3.109-16.759-3.173C7.434 6.95.67 10.881 3.598 15.028c5.659 8.014 13.601 11.072 21.957 8.481a315.337 315.337 0 0 1 7.499 13.866c-3.533 1.825-6.805 4.103-9.846 6.781-1.796 1.583-1.501 3.659-.295 5.058.292.638 9.585 6.565 13.61 9.009 4.319 2.624 8.237-4.194 3.934-6.807-2.602-1.579-5.202-3.16-7.803-4.741 2.505-1.707 8.94-4.523 9.281-4.795 3.862 6.646 7.732 13.282 11.595 19.924 2.542 4.376 9.281.411 6.728-3.978z"
            id="path4"
          />
        </g>
      </g>
    </svg>
  );
};

export const KanbanSVG: FC<ImageProperty> = ({
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
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <title>Kanban</title>
      <path d="M9 3v18h6V3H9ZM8 3H3.5A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21H8V3Zm8 0v18h4.5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3H16ZM1 4.5A2.5 2.5 0 0 1 3.5 2h17A2.5 2.5 0 0 1 23 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 19.5v-15ZM4 6h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Zm7-4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm7 0h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1ZM4 7v1h2V7H4Zm0 4v1h2v-1H4Zm7-4v1h2V7h-2Zm7 0v1h2V7h-2Zm0 4v1h2v-1h-2Zm0 4v1h2v-1h-2ZM3.5 5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm7 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm7 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
    </svg>
  );
};

export const MVPSVG: FC<ImageProperty> = ({ id, className, height, width }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      width={undefined === width || null === width ? "140" : width}
      height={undefined === height || null === height ? "140" : height}
      className={undefined === className || null === className ? "" : className}
      viewBox="0 0 48 48"
      fill="currentColor"
    >
      <title>Minimum Viable Product</title>
      <path d="M48 0H0v48h48V0Z" fillOpacity=".01" />
      <path
        d="M44 14 24 4 4 14v20l20 10 20-10V14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fillOpacity=".01"
      />
      <path
        d="m4 14 20 10M24 44V24M44 14 24 24M34 9 14 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ScrumSVG: FC<ImageProperty> = ({
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
      viewBox="0 0 380 380"
      fill="currentColor"
    >
      <title>Agile Scrum</title>
      <path d="M328.782 155.879c-39.25-19.183-77.384-42.102-109.367-72.092a49.757 49.757 0 0 0-2.548-2.333c-.388-.376-.817-.728-1.205-1.104-2.19-2.13-4.547-3.532-6.939-4.368-2.118-1.068-4.308-1.945-6.528-2.554-1.718-.477-3.401-.788-5.066-1.026-3.944-1.05-8.473-1.963-13.682-2.685-33.45-1.712-58.183-4.356-91.329 1.432-8.151 1.42-13.312 10.162-13.551 17.781-.728 24.041 7.65 44.149 19.434 64.657 11.832 20.627 43.725 2.047 31.857-18.617-5.842-10.179-10.555-19.607-12.865-30.091 12.721-1.062 25.819-.943 38.844-.394 4.278.776 7.93 2.261 10.478 4.511 3.711 3.258 5.812 8.706 5.889 15.341.167 13.67-7.894 29.357-21.558 41.989-15.902 14.69-32.054 16.886-40.264 16.886-1.599 0-5.227-.131-8.956-.973-.973 1.748-1.707 3.586-2.291 5.46-1.707.961-3.33 2.273-4.815 3.992-21.475 24.852-44.131 48.35-62.533 75.696-13.324 19.798 18.652 38.242 31.857 18.623 13.557-20.138 32.883-37.884 50.086-55.91a37.464 37.464 0 0 0 2.852 2.005c-20.353 35.539-40.408 70.027-62.897 107.29-12.322 20.431 19.595 38.958 31.863 18.623 30.807-51.059 64.269-100.488 94.605-151.809 16.6-22.901 31.636-44.996 43.528-70.725 26.875 20.359 56.285 37.514 86.454 52.258 21.315 10.394 40.027-21.421 18.647-31.863zM231.678 66.877c18.479 0 33.45-14.971 33.45-33.438S250.151 0 231.678 0c-18.456 0-33.426 14.971-33.426 33.438.005 18.468 14.97 33.439 33.426 33.439z" />
      <path d="M112.788 166.147c-6.217 0-11.796-2.637-15.89-7.315-.937 7.172-.03 12.638 1.384 14.171 3.324 3.586 26.69 7.805 48.147-12.017 21.451-19.84 22.233-41.398 15.788-47.061-5.114-4.505-20.073-5.722-35.891 3.103 2.088 4.708 4.594 9.475 7.53 14.601 4.153 7.232 4.26 15.305.304 22.143-4.277 7.405-12.869 12.375-21.372 12.375z" />
    </svg>
  );
};
