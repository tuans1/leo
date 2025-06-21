import { create } from "zustand";
import { TableType } from "./types/Table.type";
import { INIT_ROW_DATA } from "./Table.constant";

interface TableStoreType {
  dataSource: TableType[];
}

export const useTableStore = create<TableStoreType>((set) => ({
  dataSource: [],

  //   handleChangeRowEditable: (key: string, value: string) => {
  //     set((state) => ({
  //       rowEditable: { ...state.rowEditable, [key]: value },
  //     }));
  //   },
}));
