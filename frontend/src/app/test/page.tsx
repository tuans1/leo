"use client";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [test1, setTest1] = useState(0);
  const [test2, setTest2] = useState(0);
  const [test3, setTest3] = useState(0);
  useEffect(() => {
    setTest1(1);
    setTest2(2);
  }, [test3]);
  console.log("rerender");

  return (
    <div>
      <button
        onClick={() => {
          console.log("RUN");
          setTest3(Math.random());
          setTest1(1);
          setTest2(2);
        }}
      >
        CLICK
      </button>
    </div>
  );
}

