import React from "react";
import type { User } from "@/app/page";

type Props = {
  data: User;
};

function UserTableRow({ data }: Props) {
  return (
    <tr className="border-b hover:bg-gray-100 cursor-default">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
      >
        {data.username}
      </th>
      <td className="px-4 py-3">{data.email}</td>
      <td className="px-4 py-3">{data.phone}</td>
      <td className="px-4 py-3">{data.linkedin}</td>
      <td className="px-4 py-3">{data.company}</td>
      <td className="px-4 py-3 flex items-center justify-end">
        <button
          id="xbox-series-s-dropdown-button"
          data-dropdown-toggle="xbox-series-s-dropdown"
          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
        <div
          id="xbox-series-s-dropdown"
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
        >
          <ul
            className="py-1 text-sm text-gray-700"
            aria-labelledby="xbox-series-s-dropdown-button"
          >
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                Show
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                Edit
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
            >
              Delete
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default UserTableRow;
