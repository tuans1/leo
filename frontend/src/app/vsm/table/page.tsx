"use client";
import { Button } from "@ocean-network-express/magenta-react";
import React from "react";
import TableCreate from "./components/Table";
import { useTableStore } from "./Table.store";

export default function Table() {
  const {
    resetRowEditable,
    isEdit,
    isAddNew,
    setIsAddNew,
    dataSource,
    handleSaveTable,
  } = useTableStore();
  const handleClickAddNewRow = () => {
    setIsAddNew(true);
  };
  console.log(isEdit, "----", isAddNew, "------");
  return (
    <div className=" bg-neutral-100 p-4">
      <div className="h-[180px] text-neutral-700 p-4 bg-white">SEARCH BOX</div>
      <div className="btn w-full bg-white text-right mt-4">
        {!isEdit && !isAddNew ? (
          <Button
            variant="outline"
            className="my-2 mx-4"
            onClick={handleClickAddNewRow}
          >
            Add New
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              className="my-2 "
              onClick={() => resetRowEditable()}
            >
              Cancel
            </Button>
            <Button
              variant="fill"
              className="my-2 mx-4"
              onClick={handleSaveTable}
            >
              Save
            </Button>
          </>
        )}
      </div>
      <TableCreate dataSource={dataSource} />
    </div>
  );
}
