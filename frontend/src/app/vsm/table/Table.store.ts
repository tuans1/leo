import { create } from "zustand";
import { TableType } from "./types/Table.type";
import { INIT_ROW_DATA } from "./Table.constant";

interface TableStoreType {
  dataSource: TableType[];
  rowIndexEditable: number;
  isEdit: boolean;
  isAddNew: boolean;
  rowEditing: TableType;
  setIsAddNew: (isAddNew: boolean) => void;
  setIsEdit: (isEdit: boolean) => void;
  setRowEditable: (rowIndex: number, row?: TableType) => void;
  resetRowEditable: () => void;
  handleChangeRowEditable: (key: string, value: string) => void;
  handleSaveTable: () => void;
}

export const useTableStore = create<TableStoreType>((set, get) => ({
  dataSource: [
    {
      vesselCode: "AAA",
      vesselName: "Shipping",
      carrierCode: "AAA",
      pseudo: true,
      imoNo: "1567",
      callSign: "123AAA",
      flag: "VN",
      status: "Active",
    },
    {
      vesselCode: "BBB",
      vesselName: "THA",
      carrierCode: "BBB",
      pseudo: true,
      imoNo: "12367",
      callSign: "123BBB",
      flag: "VN",
      status: "Active",
    },
    {
      vesselCode: "CCC",
      vesselName: "SIN",
      carrierCode: "CCC",
      pseudo: true,
      imoNo: "1234",
      callSign: "123CCC",
      flag: "USA",
      status: "Inactive",
    },
  ],
  rowIndexEditable: 0,
  rowEditing: INIT_ROW_DATA,
  isEdit: false,
  isAddNew: false,
  setIsAddNew: (isAddNew) => {
    set((state) => ({
      isAddNew,
      dataSource: [INIT_ROW_DATA, ...state.dataSource],
    }));
  },
  setIsEdit: (isEdit) => {
    set(() => ({ isEdit }));
  },

  setRowEditable: (rowIndex, row = INIT_ROW_DATA) =>
    set(() => ({
      rowIndexEditable: rowIndex,
      rowEditing: row,
      isEdit: true,
    })),
  resetRowEditable: () => {
    set((state) => ({
      dataSource: state.isAddNew ? state.dataSource.slice(1) : state.dataSource,
      rowEditing: INIT_ROW_DATA,
      isEdit: false,
      isAddNew: false,
      rowIndexEditable: 0,
    }));
  },
  handleChangeRowEditable: (key: any, value: string) => {
    set((state) => ({
      rowEditing: { ...state.rowEditing, [key]: value },
    }));
  },
  handleSaveTable: () => {
    console.log(get().rowEditing, "-------");
  },
}));
