import { Input } from "@ocean-network-express/magenta-react";
import React from "react";

type Props = {
  readonly onChange: (key: string, value: string) => void;
  name?: string;
  value?: string;
};
export default function InputText({ onChange, name, value }: Readonly<Props>) {
  const [newValue, setNewValue] = React.useState(value ?? "");
  console.log(value, "name----", newValue, "-----");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  };

  const handleBlur = () => {
    onChange(name ?? "", newValue);
  };
  return (
    <Input
      type="text"
      placeholder="Type default"
      value={newValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
