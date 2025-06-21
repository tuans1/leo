"use client";
import { bc } from "@/app/utils/broadcast";
import { Button } from "@ocean-network-express/magenta-react";
import React, { useEffect } from "react";

export default function Broadcast() {
  useEffect(() => {
    bc.onmessage = (e) => {
      console.log(e.data);
    };
  });

  return (
    <>
      <p>hi</p>
      <Button onClick={() => bc.postMessage("hello")}>Broadcast</Button>
    </>
  );
}
