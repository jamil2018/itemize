"use client";
import Link from "next/link";
import Logo from "./components/branding/Logo";
import FormGroup from "./components/form/FormGroup";
import * as Yup from "yup";
import TextInput from "./components/form/TextInput";
import { Formik, Form } from "formik";

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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("This field is required"),
              password: Yup.string().required("This field is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <TextInput
                label="Email"
                name="email"
                type="text"
                placeholder="john.doe@email.com"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="enter password"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white block mt-8 px-5 py-2 w-full rounded-sm hover:bg-orange-600"
              >
                Login
              </button>
            </Form>
          </Formik>
          <hr className="mt-4 mb-3 opacity-25" />
          <Link
            className="text-orange-500 font-semibold hover:underline"
            href="/login/reset"
          >
            forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
