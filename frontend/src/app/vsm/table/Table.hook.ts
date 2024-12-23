/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AddNewRowFeature } from "./features/add-new-row/add-new-row.feature";

type Props<TData> = Readonly<{
  columns: ColumnDef<TData, any>[];
  dataSource: TData[];
}>;

export const useNormalTable = <TData>({
  columns,
  dataSource,
}: Props<TData>) => {
  const table = useReactTable({
    data: dataSource,
    columns,
    getCoreRowModel: getCoreRowModel(),
    _features: [AddNewRowFeature],
    newRow: {},
  });

  return {
    table,
  };
};
