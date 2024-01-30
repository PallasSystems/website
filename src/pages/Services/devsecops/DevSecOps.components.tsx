import React, { FC } from 'react';

import { ImageProperty } from '@pallassystems/website-core';

export const DevSecOpsSVG: FC<ImageProperty> = ({ id, className, height, width }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      id={id}
      width={undefined === width || null === width ? '140' : width}
      height={undefined === height || null === height ? '140' : height}
      className={undefined === className || null === className ? '' : className}
      viewBox='0 0 48 48'
      fill='none'
    >
      <title>DevSecOps</title>
      <path
        d='M17 16h-4a9 9 0 1 0 6.345 15.383C20.985 29.753 24 25 24 25s3.006-4.732 4.632-6.36A9 9 0 1 1 35 34h-4'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m35 30-4 4 4 4M13 12l4 4-4 4'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ContinuousDeploymentSVG: FC<ImageProperty> = ({ id, className, height, width }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      id={id}
      width={undefined === width || null === width ? '140' : width}
      height={undefined === height || null === height ? '140' : height}
      className={undefined === className || null === className ? '' : className}
      viewBox='0 0 145 140'
      fill='currentColor'
    >
      <title>Continuous Deployment</title>
      <path d='M49.839 79.729c-6.673 0-12.102 5.428-12.102 12.1s5.429 12.1 12.102 12.1c6.672 0 12.101-5.428 12.101-12.1-.001-6.672-5.429-12.1-12.101-12.1zm0 16.983a4.889 4.889 0 0 1-4.884-4.883 4.89 4.89 0 0 1 4.884-4.883 4.889 4.889 0 0 1 4.883 4.883 4.89 4.89 0 0 1-4.883 4.883zM117.563 79.729c-6.672 0-12.101 5.428-12.101 12.1s5.428 12.1 12.101 12.1c6.672 0 12.101-5.428 12.101-12.1.001-6.672-5.428-12.1-12.101-12.1zm0 16.983a4.889 4.889 0 0 1-4.883-4.883 4.889 4.889 0 0 1 4.883-4.883 4.888 4.888 0 0 1 4.883 4.883 4.888 4.888 0 0 1-4.883 4.883z' />
      <path d='M89.118 36.796H38.103c-6.964 0-12.631 5.666-12.631 12.63v41.929a3.608 3.608 0 0 0 7.218 0V49.426a5.42 5.42 0 0 1 5.413-5.413h51.016a5.42 5.42 0 0 1 5.413 5.413v32.907a5.42 5.42 0 0 1-5.413 5.413H68.11a3.608 3.608 0 1 0 0 7.216h21.008c6.964 0 12.631-5.666 12.631-12.63V49.426c0-6.964-5.666-12.63-12.631-12.63zM140.361 73.735 131.87 56.28a3.609 3.609 0 0 0-3.245-2.029h-19.342a3.608 3.608 0 1 0 0 7.216h17.085l7.14 14.678v15.209a3.608 3.608 0 0 0 7.218 0v-16.04a3.633 3.633 0 0 0-.365-1.579zM16.841 72.202H1.804a1.805 1.805 0 0 0 0 3.61h15.037a1.805 1.805 0 0 0 0-3.61zM16.841 81.402h-8.12a1.805 1.805 0 0 0 0 3.61h8.12a1.805 1.805 0 0 0 0-3.61z' />
      <path d='M85.251 76.413c.997 0 1.804-.809 1.804-1.805V57.917c0-5.388-2.883-8.119-8.57-8.119H58.641a1.804 1.804 0 1 0 0 3.61h19.844c4.15 0 4.962 1.653 4.962 4.51v16.691c0 .995.808 1.804 1.804 1.804z' />
    </svg>
  );
};

export const ContinuousIntegrationSVG: FC<ImageProperty> = ({ id, className, height, width }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      id={id}
      width={undefined === width || null === width ? '140' : width}
      height={undefined === height || null === height ? '140' : height}
      className={undefined === className || null === className ? '' : className}
      viewBox='0 0 32 32'
      fill='none'
      stroke='currentColor'
    >
      <title>Continuous Integration</title>
      <path d='M3 11v3M18 18l-1.7-8.3c-.2-1-1-1.7-2-1.7H11c-1.1 0-2 .9-2 2v4M31 26h-5.6c-.9 0-1.8-.4-2.4-1h0c-.6-.6-1-1.5-1-2.4V17l8 9' />
      <circle cx='4' cy='23' r='3' />
      <circle cx='16' cy='23' r='3' />
      <path d='M19 8h-7v7M13.2 22H6.8' />
      <path d='M1.5 21.3C1.2 21 1 20.5 1 20v-4c0-1.1.9-2 2-2h6l9 4h4' />
    </svg>
  );
};

export const TestingSVG: FC<ImageProperty> = ({ id, className, height, width }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      id={id}
      width={undefined === width || null === width ? '140' : width}
      height={undefined === height || null === height ? '140' : height}
      className={undefined === className || null === className ? '' : className}
      viewBox='-100 -100 690 690'
      fill='currentColor'
    >
      <title>Testing</title>
      <path d='m357.071 87.929-85-85C270.159 1.017 267.601.025 265 .024V0H10C4.477 0 0 4.477 0 10v470c0 5.523 4.477 10 10 10h340c5.523 0 10-4.477 10-10V95h-.024c-.001-2.601-.993-5.159-2.905-7.071zM275 34.142 325.858 85H275V34.142zM340 470H20V20h235v75c0 5.523 4.477 10 10 10h75v365zM470 235v155h-15V120h-.012a9.987 9.987 0 0 0-.757-3.846l-25-60a10 10 0 0 0-18.462 0l-25 60a9.987 9.987 0 0 0-.757 3.846H385v360c0 5.523 4.477 10 10 10h50c5.523 0 10-4.477 10-10v-70h25c5.523 0 10-4.477 10-10V235h-20zM420 86l10 24h-20l10-24zm15 384h-30v-60h30v60zm0-80h-30V130h30v260z' />
      <path d='M125 135H75c-5.523 0-10 4.477-10 10v50c0 5.523 4.477 10 10 10h50c5.523 0 10-4.477 10-10v-50c0-5.523-4.477-10-10-10zm-10 50H85v-30h30v30zM125 245H75c-5.523 0-10 4.477-10 10v50c0 5.523 4.477 10 10 10h50c5.523 0 10-4.477 10-10v-50c0-5.523-4.477-10-10-10zm-10 50H85v-30h30v30zM125 355H75c-5.523 0-10 4.477-10 10v50c0 5.523 4.477 10 10 10h50c5.523 0 10-4.477 10-10v-50c0-5.523-4.477-10-10-10zm-10 50H85v-30h30v30zM150 140h50v20h-50zM150 180h135v20H150zM150 250h50v20h-50zM150 290h135v20H150zM150 360h50v20h-50zM150 400h135v20H150z' />
    </svg>
  );
};
