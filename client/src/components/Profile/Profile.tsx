
import React from "react";

export const Profile: React.FC = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center mx-auto px-6 md:h-screen lg:py-0">
      <div className="bg-white shadow rounded-lg">
        <div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">Jessica Jones, </h1>
          <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

          <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
          <p className="mt-2 text-gray-500">University of Computer Science</p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the named Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
        </div>
      </div>
    </div>
  );
}