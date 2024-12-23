import {
  Cell,
  Column,
  Row,
  RowData,
  Table,
  TableFeature,
} from "@tanstack/react-table";
import { AddNewRowStates } from "./add-new-row.type";

export const AddNewRowFeature: TableFeature = {
  getInitialState: (state): AddNewRowStates => {
    return {
      ...state,
      newRow: {},
    };
  },

  getDefaultOptions: () => ({
    newRow: {},
  }),

  createTable<TData extends RowData>(table: Table<TData>) {
    table.handleChangeNewRow = (key: string, value: string) => {
      table.setState((oldState) => ({
        ...oldState,
        newRow: { ...oldState.newRow, [key]: value },
      }));
      table.options.newRow = { ...table.options.newRow, [key]: value };
    };
    table.resetAddNewRow = () => {
      table.setState((oldState) => ({
        ...oldState,
        newRow: {},
      }));
    };
  },
};
