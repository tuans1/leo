import { ColumnDef, flexRender } from "@tanstack/react-table";
import { TableType } from "../types/Table.type";
import { use, useEffect, useMemo } from "react";
import {
  Input,
  ListItemText,
  Select,
  SelectOption,
  Table,
  Tbody,
  Td,
  Thead,
  Toggle,
  Tr,
} from "@ocean-network-express/magenta-react";
import { useNormalTable } from "../Table.hook";
import { CARRIER_OPTIONS } from "../Table.constant";

type Props = {
  dataSource: any[];
  isAddNew: boolean;
};

export default function TableCreate({ isAddNew, dataSource }: Readonly<Props>) {
  const columns = useMemo(
    (): ColumnDef<TableType>[] => [
      {
        accessorKey: "vesselCode",
        header: "Vessel Code",
        size: 161,
        minSize: 161,
        cell: ({ row, getValue, table }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.options.newRow.vesselCode}
              onChange={(e) =>
                table.handleChangeNewRow("vesselCode", e.target.value)
              }
            />
          ) : (
            getValue()
          );
        },
      },
      {
        accessorKey: "vesselName",
        header: "Vessel Name",
        size: 320,
        cell: ({ row, getValue }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.getState().newRow.vesselName}
              onChange={(e) =>
                table.handleChangeNewRow("vesselName", e.target.value)
              }
            />
          ) : (
            getValue()
          );
        },
      },
      {
        accessorKey: "carrierCode",
        header: "Carrier Code",
        size: 166,
        cell: ({ row, getValue }) => {
          return isAddNew && row.index === 0 ? (
            <Select
              items={CARRIER_OPTIONS}
              placeholder="Choose an option"
              value={table.getState().newRow.carrierCode}
              onValueChange={(value) => {
                table.handleChangeNewRow("carrierCode", value[0]);
              }}
            >
              {CARRIER_OPTIONS.map((item) => (
                <SelectOption key={item.value} item={item}>
                  <ListItemText primaryText={item.label} />
                </SelectOption>
              ))}
            </Select>
          ) : (
            getValue()
          );
        },
      },
      {
        accessorKey: "pseudo",
        header: "Pseudo",
        size: 166,
        cell: ({ row, getValue }) => {
          const pseudoText = getValue() ? "Yes" : "No";
          return isAddNew && row.index === 0 ? (
            // <Input
            //   placeholder="Type default"
            //   value={table.getState().newRow.vesselCode}
            //   onChange={(e) =>
            //     table.handleChangeNewRow("vesselCode", e.target.value)
            //   }
            <Toggle value={table.getState().newRow.pseudo} onChange={() => {}}>
              Label
            </Toggle>
          ) : (
            pseudoText
          );
        },
      },
      {
        accessorKey: "imoNo",
        header: "IMO No",
        size: 160,
        cell: ({ row }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.getState().newRow.imoNo}
              onChange={(e) =>
                table.handleChangeNewRow("imoNo", e.target.value)
              }
            />
          ) : (
            <span>{row.original.imoNo}</span>
          );
        },
      },
      {
        accessorKey: "callSign",
        header: "Call Sign",
        size: 140,
        cell: ({ row, getValue }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.getState().newRow.callSign}
              onChange={(e) =>
                table.handleChangeNewRow("callSign", e.target.value)
              }
            />
          ) : (
            getValue()
          );
        },
      },
      {
        accessorKey: "flag",
        header: "Flag",
        size: 140,
        cell: ({ row, getValue }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.getState().newRow.flag}
              onChange={(e) => table.handleChangeNewRow("flag", e.target.value)}
            />
          ) : (
            getValue()
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 140,
        cell: ({ row, getValue }) => {
          return isAddNew && row.index === 0 ? (
            <Input
              placeholder="Type default"
              value={table.getState().newRow.status}
              onChange={(e) =>
                table.handleChangeNewRow("status", e.target.value)
              }
            />
          ) : (
            getValue()
          );
        },
      },
    ],
    [isAddNew]
  );
  const { table } = useNormalTable({ columns, dataSource });
  useEffect(() => {
    if (isAddNew) {
      table.resetAddNewRow();
    }
  }, [isAddNew, table]);

  console.log(table.getState().newRow, "-------newRow");
  console.log(table.options.newRow, "-------newRow");
  return (
    <Table>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Td
                  key={header.id}
                  colSpan={header.colSpan}
                  width={header.getSize()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
