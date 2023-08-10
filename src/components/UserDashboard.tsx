import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import UserTable from "./UserTable";
import TableLoadingSkelton from "./TableLoadingSkelton";

type Props = {};

const GET_USERS = gql`
  query Query($limit: Int!, $offset: Int!) {
    users(limit: $limit, offset: $offset) {
      username
      email
      linkedin
      phone
      company
    }
  }
`;

const RESULT_SIZE = 10;

export default function UserDashboard({}: Props) {
  const [currentPage, setPage] = useState(0);
  const { data, loading } = useQuery(GET_USERS, {
    variables: {
      limit: RESULT_SIZE,
      offset: RESULT_SIZE * currentPage,
    },
  });

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

  return <UserTable data={data.users} page={currentPage} setPage={setPage} />;
}
