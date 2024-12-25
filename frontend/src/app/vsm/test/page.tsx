"use client";
import {
  Button,
  Input,
  InputProps,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@ocean-network-express/magenta-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

type Data = {
  test: string;
};

function TestComponent(
  props: InputProps & { onSubmit?: (value: string) => void }
) {
  const [value, setValue] = React.useState(props.value as string);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("BLUR", value);
    props.onSubmit?.(value);
    props.onBlur?.(e);
  };

  React.useEffect(() => {
    console.log("MOUNT");

    return () => {
      console.log("UNMOUNT");
    };
  }, []);

  return (
    <Input
      placeholder="Type default"
      {...props}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
    />
  );
}

export default function Test() {
  const [data, setData] = React.useState<Data[]>([{ test: "test" }]);
  const [addingData, setAddingData] = React.useState<Data[]>([]);
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "test",
      header: "test",
      size: 100,
      cell: ({ row }) => {
        console.log({ row });
        return (
          <TestComponent
            value={row.original.test}
            onSubmit={(value) => handleChange(value, row.index)}
          />
        );
      },
    },
  ];
  const handleChange = (value: string, rowIndex: number) => {
    addingData[rowIndex] = {
      ...addingData[rowIndex],
      test: value,
    };
    setAddingData([...addingData]);
  };
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const addingTable = useReactTable({
    columns,
    data: addingData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>
        <Button onClick={() => setAddingData([...addingData, { test: "" }])}>
          Add New
        </Button>
        <Button onClick={() => setAddingData([])}>Cancel</Button>
      </div>
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
          {addingTable.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </Tr>
          ))}
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
    </>
  );
}
