import { RowData } from "@tanstack/react-table";

export interface AddNewRowStates {
  newRow: any;
}

export interface AddNewRowOptions {
  newRow: any;
}

export interface AddNewRowInstance {
  handleChangeNewRow: (key: string, value: string) => void;
  resetAddNewRow: () => void;
}

declare module "@tanstack/react-table" {
  interface TableState extends AddNewRowStates {}

  interface TableOptionsResolved<TData extends RowData>
    extends AddNewRowOptions {}

  interface Table<TData extends RowData> extends AddNewRowInstance {}
}
