import React from "react";
import { useQuery, gql } from "@apollo/client";
import UserTable from "./UserTable";

type Props = {};

const GET_USERS = gql`
  query Query {
    users {
      username
      email
      linkedin
      phone
      company
    }
  }
`;

export default function UserDashboard({}: Props) {
  const { data, loading } = useQuery(GET_USERS);
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center">
        <h2 className="text-center text-gray-400 italic text-2xl font-semibold animate-pulse">
          Fetching users data
        </h2>
        <div
          role="status"
          className="w-full p-4 space-y-4  divide-y divide-gray-200 rounded shadow animate-pulse  md:p-6"
        >
          <div className="flex items-center justify-between ">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
        </div>
      </div>
    );
  }
  return <UserTable usersData={data.users} />;
}
