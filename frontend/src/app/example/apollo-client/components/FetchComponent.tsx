import React from "react";
import { useGetListUserBySearch } from "../apollo-client.hook";
import { User } from "../user.type";

export default function FetchComponent({
  inputs,
}: Readonly<{ inputs: { type: string; name: string } }>) {
  const { data } = useGetListUserBySearch({
    inputs,
    options: {
      fetchPolicy: "cache-and-network",
    },
  });

  return (
    <div>
      <p>----------------------------------------------</p>
      <ul>
        {data?.getListUserBySearch?.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
