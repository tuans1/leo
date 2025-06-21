"use client";
import { useState } from "react";
import { useGetListUserBySearch } from "./apollo-client.hook";
import { User } from "./user.type";
import FetchComponent from "./components/FetchComponent";

export default function ApolloClientPage() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState({
    type: "admin",
    name: "tuan.luong",
  });
  const { data, previousData, networkStatus } = useGetListUserBySearch({
    inputs,
    options: {
      fetchPolicy: "cache-only",
    },
  });
  console.log(previousData, networkStatus);
  return (
    <>
      <p>TEST ApolloClientPage</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setInputs({ ...inputs })}>
        Clicked REFETCH times
      </button>
      <p>----------------------------------------------</p>
      <ul>
        {data?.getListUserBySearch?.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {count % 2 !== 0 && <FetchComponent inputs={inputs} />}
    </>
  );
}
