import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import UserTable from "./UserTable";
import TableLoadingSkelton from "./TableLoadingSkelton";

type Props = {};

const GET_USERS = gql`
  query Query($limit: Int!, $offset: Int!, $query: String) {
    users(limit: $limit, offset: $offset, query: $query) {
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
  const [query, setQuery] = useState("");
  const { data, loading } = useQuery(GET_USERS, {
    variables: {
      limit: RESULT_SIZE,
      offset: RESULT_SIZE * currentPage,
      query: query,
    },
  });
  async function startQuerySearch(searchQuery: string) {
    setPage(0);
    setQuery(searchQuery);
  }

  if (loading) {
    return <TableLoadingSkelton />;
  }
  let usersData = data.users;
  return (
    <UserTable
      data={usersData}
      page={currentPage}
      setPage={setPage}
      querySearch={startQuerySearch}
    />
  );
}
