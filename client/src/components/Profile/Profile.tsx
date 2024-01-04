
import React from "react";
import { useLocation } from "react-router-dom";

export const Profile: React.FC = (user) => {
  const { state } = useLocation();
  const { name, middleName, surname, secondSurname, email, birthday } = state;

  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center mx-auto px-6 md:h-screen">
      <div className="bg-white shadow rounded-lg px-60 py-12">
        <div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h1 className="text-4xl font-medium text-gray-700">{name} {middleName} {surname} {secondSurname}</h1>
          <p className="mt-8 text-gray-500"><span className="font-bold">Birth Day:</span> {birthday}</p>
          <p className="mt-3 text-gray-500"><span className="font-bold">Email:</span> {email}</p>
        </div>

        <div className="mt-12 flex flex-col justify-center border-b">
          <h2 className="text-4xl font-medium text-gray-700 text-center">Microposts</h2>
        </div>
      </div>
    </section>
  );
}