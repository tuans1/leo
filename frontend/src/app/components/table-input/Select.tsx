import {
  ListItemText,
  Select,
  SelectOption,
} from "@ocean-network-express/magenta-react";
import React from "react";

type Props = {
  data: any[];
  value: string[];
};
export default function Selection({ data, value }: Props) {
  return (
    <Select
      items={data}
      placeholder="Choose an option"
      value={value}
      onValueChange={(value) => {
        // handleChangeRowEditable("carrierCode", value[0]);
      }}
    >
      {data.map((item) => (
        <SelectOption key={item.value} item={item}>
          <ListItemText primaryText={item.label} />
        </SelectOption>
      ))}
    </Select>
  );
}
