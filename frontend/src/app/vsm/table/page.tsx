"use client";
import { Button } from "@ocean-network-express/magenta-react";
import React from "react";
import TableCreate from "./components/Table";

const initData = [
  {
    vesselCode: "AAA",
    vesselName: "Shipping",
    carrierCode: "AAA",
    pseudo: true,
    imoNo: "1567",
    callSign: "123AAA",
    flag: "VN",
    status: "Active",
  },
  {
    vesselCode: "BBB",
    vesselName: "THA",
    carrierCode: "BBB",
    pseudo: true,
    imoNo: "12367",
    callSign: "123BBB",
    flag: "VN",
    status: "Active",
  },
  {
    vesselCode: "CCC",
    vesselName: "SIN",
    carrierCode: "CCC",
    pseudo: true,
    imoNo: "1234",
    callSign: "123CCC",
    flag: "USA",
    status: "Inactive",
  },
];

export default function Table() {
  const [isAddNew, setIsAddNew] = React.useState(false);
  const data = isAddNew
    ? [
        {
          vesselCode: "",
          vesselName: "",
          carrierCode: "",
          pseudo: true,
          imoNo: "",
          callSign: "",
          flag: "",
          status: "Active",
        },
        ...initData,
      ]
    : initData;
  return (
    <div className=" bg-neutral-100 p-4">
      <div className="h-[180px] text-neutral-700 p-4 bg-white">SEARCH BOX</div>
      <div className="btn w-full bg-white text-right mt-4">
        {!isAddNew ? (
          <Button
            variant="outline"
            className="my-2 mx-4"
            onClick={() => setIsAddNew(true)}
          >
            Add New
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              className="my-2 "
              onClick={() => setIsAddNew(false)}
            >
              Cancel
            </Button>
            <Button variant="fill" className="my-2 mx-4">
              Save
            </Button>
          </>
        )}
      </div>
      <TableCreate isAddNew={isAddNew} dataSource={data} />
    </div>
  );
}
