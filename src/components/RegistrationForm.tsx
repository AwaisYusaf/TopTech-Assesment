import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

type Props = {};

type FormType = {
  username: string;
  email: string;
  company: string;
  phone: string;
  linkedin: string;
};

const INSERT_DATA_MUTATION = gql`
  mutation InsertUser($data: DataInput!) {
    insertUser(data: $data) {
      message
    }
  }
`;

export default function RegistrationForm({}: Props) {
  const { handleSubmit, register } = useForm<FormType>();
  const [insertUser, { loading, error }] = useMutation(INSERT_DATA_MUTATION);
  const [userCreated, setUserCreated] = useState<null | boolean>(null);

  async function handleFormSubmit(data: FormType) {
    // const res = await fetch("/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(e),
    // });
    // const data = await res.json();
    // console.log(data);

    try {
      const {
        data: {
          insertUser: { message },
        },
      } = await insertUser({ variables: { data } });
      // const resData = await res.json();
      if (message === "success") {
        setUserCreated(true);
      } else {
        setUserCreated(false);
      }
    } catch (e) {
      setUserCreated(false);
    }
  }
  if (userCreated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
        <h1 className="text-4xl text-gray-400">
          <span className="text-green-600">Hooray!</span> Your are successfully
          registered
        </h1>
        <p className="text-gray-600 text-lg">
          <Link href="/" className="underline text-blue-400">
            Click here
          </Link>{" "}
          to view all register users
        </p>
      </div>
    );
  } else if (userCreated === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
        <h1 className="text-4xl text-gray-400">
          <span className="text-red-600">Sorry 🙁</span> You can not register
          new user at this time.
        </h1>
        <p className="text-gray-600 text-lg text-center">
          It happens when MongoDB Atlas is down, Because the application is
          using <strong>Free Shared Plan Cluster.</strong>
          <br />
          <Link href="/" className="underline text-blue-400">
            Click here
          </Link>{" "}
          to visit homepage
        </p>
      </div>
    );
  }

  return (
    <form className="mx-auto p-12" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            User Information
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            <div className="">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  {...register("username")}
                  type="text"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="Phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  {...register("phone")}
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                LinkedIn URL
              </label>
              <div className="mt-2">
                <input
                  {...register("linkedin")}
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...register("company")}
                  type="text"
                  autoComplete="company"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          href="/"
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}