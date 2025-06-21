import { ColumnDef, Column } from "@tanstack/react-table";
import InputText from "@/app/components/table-input/InputText";
import { cloneElement, ReactElement } from "react";
import { Input, SelectOption } from "@ocean-network-express/magenta-react";
import Selection from "@/app/components/table-input/Select";
import { TableType } from "../types/Table.type";

type ColumnOptions<T> = {
  key: keyof T;
  header: string;
  cell: ReactElement;
  optionsSelect?: { label: string; value: any }[]; // Chỉ dùng cho select
};

// type ColumnGroup<T> = {
//   header: string;
//   columns: ColumnOptions<T>[];
// };

export const createVesselCodeColumn = (): ColumnDef<TableType> => ({
  accessorKey: "vesselCode",
  header: "Vessel Code",
  cell: ({ row, table }) => {
    // console.log(table.getState(), "---COLUMN");
    return (
      <Input
        type="text"
        placeholder="Type default"
        value={table.getState().rowEditing.vesselCode}
        onChange={(e) => table.handleEditingRow("vesselCode", e.target.value)}
      />
    );
  },
});

// export const createSelectColumn = <T,>({
//   key,
//   header,
//   optionsSelect,
// }: ColumnOptions<T>): ColumnDef<T> => ({
//   accessorKey: key as string,
//   header,
//   cell: ({ row }) => <Selection />,
// });

// export const createGroupedColumns = <T,>(
//   groups: ColumnGroup<T>[]
// ): ColumnDef<T>[] =>
//   groups.map((group) => ({
//     header: group.header,
//     columns: group.columns.map((col) => createColumn<T>(col)),
//   }));
