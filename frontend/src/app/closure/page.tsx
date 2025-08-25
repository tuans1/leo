"use client";
import React, { useEffect, useState } from "react";

export default function Closure() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Count trong closure:", count);
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
