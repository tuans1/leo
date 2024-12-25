/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AddNewRowFeature } from "./features/add-new-row/add-new-row.feature";
import { useMemo, useState } from "react";

type Props<TData> = Readonly<{
  columns: ColumnDef<TData, any>[];
  dataSource: TData[];
  rowEditing: TData;
}>;

export const useNormalTable = <TData>({
  columns,
  dataSource,
  rowEditing,
}: Props<TData>) => {
  const table = useReactTable({
    _features: [AddNewRowFeature],
    data: useMemo(() => dataSource, []),
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { rowEditing },
  });

  return {
    table,
  };
};
