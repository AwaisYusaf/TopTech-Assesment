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
  const [savingUser, setSavingUser] = useState(false);

  async function handleFormSubmit(data: FormType) {
    // const res = await fetch("/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(e),
    // });
    // const data = await res.json();
    // console.log(data);
    setSavingUser(true);
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
                  {...register("username", { required: true })}
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
                  {...register("email", { required: true })}
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
                  {...register("phone", { required: true })}
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
                  {...register("linkedin", { required: true })}
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
                  {...register("company", { required: true })}
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
        {savingUser ? (
          <button
            disabled
            type="button"
            className="opacity-70 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  focus:ring-4 focus:outline-none focus:ring-blue-300 text-center mr-2 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Submitting...
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
}
