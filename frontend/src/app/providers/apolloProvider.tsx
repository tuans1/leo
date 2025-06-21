"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { apolloClient } from "../utils/apollo-client";

export const ApolloProviderComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
