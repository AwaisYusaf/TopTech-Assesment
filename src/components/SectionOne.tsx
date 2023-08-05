"use client";
import React from "react";
import UserDashboard from "./UserDashboard";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type Props = {
  URI: string;
};

function SectionOne({ URI }: Props) {
  const gqlClient = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={gqlClient}>
        <UserDashboard />
      </ApolloProvider>
    </div>
  );
}

export default SectionOne;
