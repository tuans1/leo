import React from "react";
import { useTableStore } from "../Table.store";
import { Input } from "@ocean-network-express/magenta-react";

type Props = {
  key: string;
};

export default function EditableCell({ key }: Readonly<Props>) {
  const { handleChangeRowEditable, rowEditable } = useTableStore();

  React.useEffect(() => {
    console.log("MOUNTED-----");
  }, []);

  return (
    <Input
      placeholder="Type default"
      value={rowEditable["vesselCode"]}
      onChange={(e) => handleChangeRowEditable("vesselCode", e.target.value)}
    />
  );
}
