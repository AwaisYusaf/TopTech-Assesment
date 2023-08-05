"use client";
import RegistrationForm from "@/components/RegistrationForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type Props = {};

function RegisterPage({}: Props) {
  const gqlClient = new ApolloClient({
    uri: process.env.GRAPHQL_URI || "https://toptech-assesment.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={gqlClient}>
      <RegistrationForm />;
    </ApolloProvider>
  );
}

export default RegisterPage;
