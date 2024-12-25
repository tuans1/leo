import { flexRender } from "@tanstack/react-table";
import { TableType } from "../types/Table.type";
import {
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@ocean-network-express/magenta-react";
import { useNormalTable } from "../Table.hook";
import { useTableStore } from "../Table.store";
import { createVesselCodeColumn } from "../share-helper/CreateColumn";
import InputText from "@/app/components/table-input/InputText";
import { useMemo } from "react";

type Props = {
  dataSource: TableType[];
};

export default function TableCreate({ dataSource }: Readonly<Props>) {
  const { rowEditing } = useTableStore();
  // console.log(rowEditing, "-----------------------rowEditable");
  //   {
  //     accessorKey: "vesselCode",
  //     header: "Vessel Code",
  //     size: 161,
  //     minSize: 161,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           key={row.id}
  //           placeholder="Type default"
  //           value={rowEditable.vesselCode}
  //           onChange={(e) =>
  //             handleChangeRowEditable("vesselCode", e.target.value)
  //           }
  //         />
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "vesselName",
  //     header: "Vessel Name",
  //     size: 320,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           placeholder="Type default"
  //           defaultValue={rowEditable.vesselName}
  //           onBlur={(e) =>
  //             handleChangeRowEditable("vesselName", e.target.value)
  //           }
  //         />
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "carrierCode",
  //     header: "Carrier Code",
  //     size: 166,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Select
  //           items={CARRIER_OPTIONS}
  //           placeholder="Choose an option"
  //           value={[rowEditable.carrierCode]}
  //           onValueChange={(value) => {
  //             handleChangeRowEditable("carrierCode", value[0]);
  //           }}
  //         >
  //           {CARRIER_OPTIONS.map((item) => (
  //             <SelectOption key={item.value} item={item}>
  //               <ListItemText primaryText={item.label} />
  //             </SelectOption>
  //           ))}
  //         </Select>
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "pseudo",
  //     header: "Pseudo",
  //     size: 166,
  //     cell: ({ row, getValue }) => {
  //       const pseudoText = getValue() ? "Yes" : "No";
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Toggle>Label</Toggle>
  //       ) : (
  //         pseudoText
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "imoNo",
  //     header: "IMO No",
  //     size: 160,
  //     cell: ({ row }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           placeholder="Type default"
  //           defaultValue={rowEditable.imoNo}
  //           onBlur={(e) => handleChangeRowEditable("imoNo", e.target.value)}
  //         />
  //       ) : (
  //         <span>{row.original.imoNo}</span>
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "callSign",
  //     header: "Call Sign",
  //     size: 140,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           placeholder="Type default"
  //           defaultValue={rowEditable.callSign}
  //           onBlur={(e) => handleChangeRowEditable("callSign", e.target.value)}
  //         />
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "flag",
  //     header: "Flag",
  //     size: 140,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           placeholder="Type default"
  //           defaultValue={rowEditable.flag}
  //           onBlur={(e) => handleChangeRowEditable("flag", e.target.value)}
  //         />
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "status",
  //     header: "Status",
  //     size: 140,
  //     cell: ({ row, getValue }) => {
  //       return (isAddNew || isEdit) && row.index === rowIndexEditable ? (
  //         <Input
  //           placeholder="Type default"
  //           value={rowEditable.status}
  //           onBlur={(e) => handleChangeRowEditable("status", e.target.value)}
  //         />
  //       ) : (
  //         getValue()
  //       );
  //     },
  //   },
  //   {
  //     header: "Action",
  //     size: 140,
  //     cell: ({ row }) => {
  //       return !isAddNew && !isEdit ? (
  //         <Button
  //           variant="outline"
  //           className="my-2 mx-4"
  //           onClick={() => handleClickEditRow(row.index, row.original)}
  //         >
  //           Edit
  //         </Button>
  //       ) : (
  //         ""
  //       );
  //     },
  //   },
  // ];
  const columns = useMemo(
    () => [
      createVesselCodeColumn(),
      // createInputColumn<TableType>({ key: "vesselName", header: "Vessel Name" }),
      // createInputColumn<TableType>({
      //   key: "carrierCode",
      //   header: "Carrier Code",
      // }),
      // createInputColumn<TableType>({ key: "pseudo", header: "Pseudo" }),
      // createInputColumn<TableType>({ key: "imoNo", header: "IMO No" }),
      // createInputColumn<TableType>({ key: "callSign", header: "Call Sign" }),
      // createInputColumn<TableType>({ key: "flag", header: "Flag" }),
      // createInputColumn<TableType>({ key: "status", header: "Status" }),
    ],
    []
  );
  const { table } = useNormalTable({
    columns,
    dataSource,
    rowEditing,
  });
  // const handleClickEditRow = (rowIndex: number, rowData: TableType) => {
  //   setRowEditable(rowIndex, rowData);
  // };

  console.log(rowEditing, "------rowEditing");
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
              <td key={cell.id} height={57}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
