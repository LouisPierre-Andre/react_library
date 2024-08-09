import React from 'react';

const Footer1 = () => (
  <footer>
    <div className="bg-gray-800 py-4 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <a href="/" className="block w-56 mb-10">
              <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                      <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g>
                    <text fill="white" fontFamily="Nunito-Bold, Nunito" fontSize="512" fontWeight="bold">
                      <tspan x="654" y="518">Tailwindow</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </a>
            <p className="text-justify">
              Tailwindow is a collection of UI Components created using Tailwind CSS Framework. The UI Components gives you all of the building blocks you need to build any designs without any annoying opinionated styles you have to fight to override.
            </p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">Company</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">Blog</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-green-400">Getting Started With HTML and CSS</a></li>
              <li><a href="#" className="hover:text-green-400">What Is Flex And When to Use It?</a></li>
              <li><a href="#" className="hover:text-green-400">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a href="#" className="hover:text-green-400">5 Tips to Make Responsive Website</a></li>
              <li><a href="#" className="hover:text-green-400">See More</a></li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">Connect With Us</h2>
            </div>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM256 368c-27.7 22.6-62.7 34.8-100.4 34.8s-72.8-12.2-100.4-34.8c-27.7-22.6-34.8-53.7-36.1-74.1 0-20.4 8.4-52.4 36.1-74.1 27.7-22.6 62.7-34.8 100.4-34.8s72.8 12.2 100.4 34.8c27.7 22.6 34.8 53.7 36.1 74.1 0 20.4-8.4 52.4-36.1 74.1z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-green-400 hover:border-green-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M384 256c0-16.5-3.3-32.1-8.6-46.6l27.1-26.6c11.2-10.9 12.6-28.8 3.4-39.9-15.5-15.2-64.5-62.3-84.8-80.3-10.6-8.7-23.8-10.5-33.8-3.9-8.5 5.5-9.9 15.6-3.6 23.4l21.3 22.3c9.5 9.7 11.1 22.8 5.1 34.4-3.4 6.8-8.8 12.5-15.6 17.6-24.3 19.6-48.7 28.4-78.2 24.1-20.2-3.4-35.2-22.8-35.2-44.5V102.2c0-22.6 15.1-41.8 36.8-48.4 21.7-6.5 44.8 2.8 54.6 22.3l18.4 33.2c5.7 10.1 17.2 14.4 27.1 10.4 9.4-3.7 14.3-14.6 11.6-24.6-9.7-43.7-43.2-68.1-84.8-68.1-45.7 0-82.7 37.4-82.7 82.7v174.2c0 45.7 37.1 82.7 82.7 82.7 15.3 0 27.5-6.1 35.1-15.6 11.4 11.2 23.9 14.7 37.5 14.7 38.1 0 61.6-19.7 83.2-35.1 5.8-4.6 10.6-10.6 13.5-17.3 4.7-11.7 3.4-24.3-2.6-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center py-6">
          <p className="text-sm text-gray-500">
            © 2024 Tailwindow, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer1;
