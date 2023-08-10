"use client";
import React, { useState, useEffect } from "react";
import UserTableRow from "./UserTableRow";
import Link from "next/link";
import type { User } from "@/app/page";

type Props = {
  data: User[];
  setPage: any;
  page: number;
  querySearch: any;
};

const Sort = {
  default: "",
  AscendingByUsername: "AscendingByUsername",
  DescendingByUsername: "DescendingByUsername",
  AscendingByEmail: "AscendingByEmail",
  DescendingByEmail: "DescendingByEmail",
  AscendingByCompany: "AscendingByCompany",
  DescendingByCompany: "DescendingByCompany",
  AscendingByPhone: "AscendingByPhone",
  DescendingByPhone: "DescendingByPhone",
};

export default function UserTable({ data, setPage, page, querySearch }: Props) {
  const [updatedData, setUpdatedData] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sorted, setSorted] = useState(Sort.default);

  //States for handling dropdowns
  const [showSortByDropDown, setShowSortByDropDown] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    //Filter by SearchBox Query.
    // if (searchQuery.length > 0) {
    //   let filtered: User[] = [];
    //   if (searchBy === "option-username") {
    //     filtered = data.filter((user) =>
    //       user.username.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //   } else if (searchBy === "option-phone") {
    //     filtered = data.filter((user) => user.phone.includes(searchQuery));
    //   } else if (searchBy === "option-company") {
    //     filtered = data.filter((user) =>
    //       user.company.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //   } else if (searchBy === "option-email") {
    //     filtered = data.filter((user) =>
    //       user.email.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //   } else if (searchBy === "option-linkedin") {
    //     filtered = data.filter((user) =>
    //       user.linkedin.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //   }
    //   setUpdatedData(filtered);
    //   return;
    // }

    //Filter by sort order

    let sortedData = [...data];
    if (sorted === Sort.default) {
      setUpdatedData([]);
    } else if (sorted === Sort.AscendingByUsername) {
      sortedData.sort((a, b) => {
        if (a.username.toLowerCase() > b.username.toLowerCase()) {
          return 1;
        }
        return -1;
      });
    } else if (sorted === Sort.DescendingByUsername) {
      sortedData.sort((a, b) => {
        if (a.username.toLowerCase() > b.username.toLowerCase()) {
          return -1;
        }
        return 1;
      });
    } else if (sorted === Sort.AscendingByEmail) {
      sortedData.sort((a, b) => {
        if (a.email > b.email) {
          return 1;
        }
        return -1;
      });
    } else if (sorted === Sort.DescendingByEmail) {
      sortedData.sort((a, b) => {
        if (a.email > b.email) {
          return -1;
        }
        return 1;
      });
    } else if (sorted === Sort.AscendingByPhone) {
      sortedData.sort((a, b) => {
        if (a.phone > b.phone) {
          return 1;
        }
        return -1;
      });
    } else if (sorted === Sort.DescendingByPhone) {
      sortedData.sort((a, b) => {
        if (a.phone > b.phone) {
          return -1;
        }
        return 1;
      });
    } else if (sorted === Sort.AscendingByCompany) {
      sortedData.sort((a, b) => {
        if (a.company > b.company) {
          return 1;
        }
        return -1;
      });
    } else if (sorted === Sort.DescendingByCompany) {
      sortedData.sort((a, b) => {
        if (a.company > b.company) {
          return -1;
        }
        return 1;
      });
    }
    setUpdatedData(sortedData);
    setRendered(!rendered);
  }, [searchQuery, sorted]);

  return (
    <section
      className="bg-gray-50 py-8"
      onClick={() => (showSortByDropDown ? setShowSortByDropDown(false) : {})}
    >
      <div className="mx-auto px-4 lg:px-12 ">
        <div className="bg-white relative min-h-screen flex flex-col shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-3">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => querySearch(searchQuery)}
                  className="bg-blue-400 text-sm font-semibold rounded-md ring-2 ring-blue-600 ring-offset-2 px-6 py-2 text-white"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link
                href="/register"
                type="button"
                className="flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add User
              </Link>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                  type="button"
                  onClick={() => setShowSortByDropDown(!showSortByDropDown)}
                >
                  <svg
                    className="-ml-1 mr-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                  Sort By
                </button>
                <div
                  id="sortby-dropdown"
                  className={`absolute ${
                    showSortByDropDown ? "" : "hidden"
                  } top-14 right-4 z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow`}
                >
                  <button
                    onClick={() => setSorted(Sort.AscendingByUsername)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Username ascending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.DescendingByUsername)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Username descending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.AscendingByEmail)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Email ascending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.DescendingByEmail)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Email descending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.AscendingByPhone)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Phone ascending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.DescendingByPhone)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Phone descending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.AscendingByCompany)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Company ascending
                  </button>
                  <button
                    onClick={() => setSorted(Sort.DescendingByCompany)}
                    className=" my-1 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                  >
                    Company descending
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-3">
                    LinkedIn URL
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Company
                  </th>
                </tr>
              </thead>

              <tbody>
                {updatedData.length > 0 &&
                  updatedData.map((user: User, index: number) => {
                    return <UserTableRow key={index} data={user} />;
                  })}
              </tbody>

              <tbody>
                {updatedData.length == 0 &&
                  data.map((user: User, index: number) => {
                    return <UserTableRow key={index} data={user} />;
                  })}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 ">
              Showing
              <span className="font-semibold text-gray-900 ">
                {" "}
                {page * 10 + 1}-{data.length + page * 10}{" "}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button
                  onClick={() => {
                    setPage(page - 1);
                    setUpdatedData([]);
                  }}
                  disabled={page == 0}
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                  1
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                  2
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 "
                >
                  3
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 "
                >
                  4
                </a>
              </li>

              <li>
                <button
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 "
                >
                  5
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setPage(page + 1);
                    setUpdatedData([]);
                  }}
                  disabled={data.length < 10}
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
