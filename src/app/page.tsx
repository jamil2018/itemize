"use client";

import Link from "next/link";
import Logo from "./components/branding/Logo";
import FormGroup from "./components/form/FormGroup";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="rounded-r-3xl w-1/2 flex justify-center items-center h-screen bg-[url('../../public/login_bg.svg')]">
        <Logo size={5} />
      </div>
      <div className="rounded-l-3xl w-1/2 flex flex-col justify-center items-center h-screen bg-slate-800 text-white">
        <h1 className="text-3xl mb-10">
          Sign <span className="text-orange-500 underline">in</span>
        </h1>
        <div className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-3/6 p-4">
          <form action="">
            <FormGroup>
              <label htmlFor="name" className="text-sm font-semibold">
                Email
              </label>
              <input
                className="bg-transparent outline outline-1 outline-gray-500 rounded-sm mt-2 p-2 text-gray-300"
                id="name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                className="bg-transparent outline outline-1 outline-gray-500 rounded-sm mt-2 p-2 text-gray-300"
                id="password"
                type="password"
              />
            </FormGroup>
            <button className="bg-orange-500 text-white block mt-8 px-5 py-2 w-full rounded-sm hover:bg-orange-600">
              Login
            </button>
            <hr className="mt-6 mb-3 opacity-25" />
            <Link
              className="text-orange-500 font-semibold hover:underline"
              href="/login/reset"
            >
              forgot password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
