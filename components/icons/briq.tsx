import React, { FunctionComponent } from "react";
import { IconProps } from "../../types";

const briqIcon: FunctionComponent<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      fill={color ?? "#FF701E"}
      viewBox="0 0 190 94.4"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 m-5"
    >
      <path
        d="M173.5 28.5v-8.1H190v74h-19V65.2a15.556 15.556 0 0 1-11.264 8.317A25.704 25.704 0 0 1 154.6 74q-4.8 0-8.9-2.05-4.1-2.05-7.15-5.75-3.05-3.7-4.7-8.75-1.65-5.05-1.65-10.95a33.648 33.648 0 0 1 .635-6.654A28.09 28.09 0 0 1 134 35.7q1.8-4.9 5.1-8.6 3.3-3.7 7.75-5.7a23.099 23.099 0 0 1 9.003-1.992 26.683 26.683 0 0 1 .647-.008 24.235 24.235 0 0 1 4.667.427 17.331 17.331 0 0 1 5.383 1.973q4.15 2.4 6.95 6.7Zm-157 36.3V73H0V0h19v28.2q2.3-4.3 6.5-6.55t9.9-2.25q4.8 0 8.9 2.05 4.1 2.05 7.15 5.75 3.05 3.7 4.75 8.75a32.806 32.806 0 0 1 1.594 8.053A38.869 38.869 0 0 1 57.9 46.9a31.951 31.951 0 0 1-.835 7.41 28.079 28.079 0 0 1-1.015 3.34 28.245 28.245 0 0 1-3.745 6.971A25.95 25.95 0 0 1 50.95 66.3Q47.7 70 43.25 72a23.01 23.01 0 0 1-8.115 1.951A27.089 27.089 0 0 1 33.5 74a24.879 24.879 0 0 1-5.018-.483A18.517 18.517 0 0 1 23.3 71.65Q19 69.3 16.5 64.8Zm83.9-45.3v17.1a43.721 43.721 0 0 0-5.562.339 34.017 34.017 0 0 0-4.438.861q-3.689.984-5.832 3.043a9.259 9.259 0 0 0-.868.957V73h-19V20.4h17.4v10a25.545 25.545 0 0 1 2.933-4.43 19.643 19.643 0 0 1 4.067-3.72 16.557 16.557 0 0 1 5.023-2.343A14.919 14.919 0 0 1 98 19.4h1.55q.45 0 .85.1ZM125.3 73h-19V20.4h19V73Zm0-57h-19V0h19v16ZM171 52.6v-9.4q-.7-1.7-1.75-3.15a13.207 13.207 0 0 0-1.871-2.092 12.056 12.056 0 0 0-.479-.408q-1.3-1.05-2.75-1.6t-2.95-.55q-2.1 0-3.85.9t-3.05 2.5a11.495 11.495 0 0 0-1.84 3.247 13.199 13.199 0 0 0-.16.453 13.86 13.86 0 0 0-.683 3.757 15.994 15.994 0 0 0-.017.743 14.128 14.128 0 0 0 .286 2.907 10.74 10.74 0 0 0 1.014 2.843q1.3 2.45 3.65 3.85a9.932 9.932 0 0 0 3.947 1.312A12.593 12.593 0 0 0 162 58a9.604 9.604 0 0 0 3.394-.598 8.812 8.812 0 0 0 .006-.002 9.827 9.827 0 0 0 2.636-1.501 11.33 11.33 0 0 0 .364-.299q1.4-1.2 2.6-3ZM19 43.2v9.4a17.127 17.127 0 0 0 1.754 2.151 15.699 15.699 0 0 0 .196.199 12.079 12.079 0 0 0 1.197 1.055 9.638 9.638 0 0 0 .953.645q1.1.65 2.35 1T28 58a11.477 11.477 0 0 0 2.655-.297A9.801 9.801 0 0 0 32.2 57.2q1.9-.8 3.3-2.25a9.872 9.872 0 0 0 2.096-3.31 11.299 11.299 0 0 0 .054-.14 11.66 11.66 0 0 0 .645-2.695A14.946 14.946 0 0 0 38.4 47a14.222 14.222 0 0 0-.532-3.941 12.641 12.641 0 0 0-.718-1.909 11.458 11.458 0 0 0-1.746-2.696 9.92 9.92 0 0 0-1.654-1.504 8.221 8.221 0 0 0-4.819-1.549 10.033 10.033 0 0 0-.131-.001 8.179 8.179 0 0 0-3.543.821 9.662 9.662 0 0 0-.357.179 11.908 11.908 0 0 0-2.907 2.171 13.897 13.897 0 0 0-.543.579 13.385 13.385 0 0 0-2.393 3.907A15.062 15.062 0 0 0 19 43.2Z"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default briqIcon;
