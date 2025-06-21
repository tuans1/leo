import { OnChangeFn, RowData } from "@tanstack/react-table";

export interface AddNewRowStates<TData extends RowData> {
  rowEditing: TData;
}

export interface AddNewRowOptions {
  onAddNewRowChange: OnChangeFn<AddNewRowStates>;
}
interface AddNewRowInstance {
  handleEditingRow: (key: string, value: string) => void;
  resetAddNewRow: () => void;
}

declare module "@tanstack/react-table" {
  interface TableState extends AddNewRowStates<RowData> {}

  // interface TableOptionsResolved<TData extends RowData>
  //   extends AddNewRowOptions {}

  interface Table<TData extends RowData> extends AddNewRowInstance {}
}
