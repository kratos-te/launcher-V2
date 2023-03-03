/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";


export default function Landing() {
  return (
    <div className="flex justify-items-center items-center mt-48 mx-auto">
      <div className="flex flex-col justify-items-center items-center space-y-6">
        <p className="text-5xl font-extrabold dark:text-white font-bold font-sans">
          Create your custom landing pages
          <span className="text-indigo-500"> using AI</span>
        </p>

        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.757 2.03399C12.034 2.10699 12.266 2.29597 12.395 2.55297C12.878 3.51997 13.239 4.107 13.602 4.583C13.97 5.065 14.358 5.45898 14.95 6.04998C16.316 7.41698 17 9.20999 17 11C17 12.79 16.316 14.583 14.95 15.95C12.216 18.683 7.784 18.683 5.05 15.95C3.684 14.583 3 12.79 3 11C3 9.20999 3.684 7.41698 5.05 6.04998C5.336 5.76398 5.766 5.67898 6.14 5.83398C6.514 5.98798 6.757 6.35301 6.757 6.75701C6.757 7.87701 6.827 8.73 7.155 9.411C7.335 9.785 7.61601 10.151 8.10001 10.478C8.21601 9.41702 8.428 8.124 8.714 6.898C8.939 5.932 9.21899 4.96799 9.55299 4.16399C9.71999 3.76099 9.909 3.37897 10.123 3.04797C10.331 2.72597 10.599 2.39902 10.945 2.16802C11.184 2.00902 11.48 1.95999 11.757 2.03399ZM12.121 15.121C10.95 16.293 9.05 16.293 7.879 15.121C7.293 14.536 7 13.768 7 13C7 13 7.879 13.5 9.5 13.5C9.5 12.5 10 9.49999 10.75 8.99999C11.25 9.99999 11.536 10.293 12.121 10.879C12.707 11.464 13 12.232 13 13C13 13.768 12.707 14.536 12.121 15.121Z"
                fill="white"
              />
            </svg>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
