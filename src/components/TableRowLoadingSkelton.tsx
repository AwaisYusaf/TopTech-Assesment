import React from "react";

type Props = {
  delay: number;
};

function TableRowLoadingSkelton({ delay }: Props) {
  return (
    <tr className={`border-b cursor-default animate-pulse bg-gray-200 h-16`}>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
      ></th>
      <td className="px-4 py-3 animate-pulse bg-gray-200"></td>
      <td className="px-4 py-3 animate-pulse bg-gray-200"></td>
      <td className="px-4 py-3 animate-pulse bg-gray-200"></td>
      <td className="px-4 py-3 animate-pulse bg-gray-200"></td>
      <td className="px-4 py-3 flex items-center justify-end"></td>
    </tr>
  );
}

export default TableRowLoadingSkelton;
