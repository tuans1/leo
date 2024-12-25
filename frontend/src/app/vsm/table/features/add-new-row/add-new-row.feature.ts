/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  functionalUpdate,
  makeStateUpdater,
  RowData,
  Table,
  TableFeature,
  Updater,
} from "@tanstack/react-table";
import { AddNewRowOptions, AddNewRowStates } from "./add-new-row.type";

export const AddNewRowFeature: TableFeature<any> = {
  getInitialState: (state): AddNewRowStates<any> => {
    const newState = { rowEditing: {}, ...state };
    console.log(newState, "------");
    return newState;
  },

  // getDefaultOptions: <TData extends RowData>(
  //   table: Table<TData>
  // ): AddNewRowOptions => {
  //   return {
  //     onAddNewRowChange: makeStateUpdater("rowEditing", table),
  //   } as AddNewRowOptions;
  // },

  createTable<TData extends RowData>(table: Table<TData>) {
    table.handleEditingRow = (key: string, value: string) => {
      console.log(table.getState(), "------");
      const safeUpdater: Updater<AddNewRowStates<any>> = (
        old: AddNewRowStates<any>
      ) => {
        // console.log(old, "------old");
        const newState = functionalUpdate((old) => {
          const newTest = { ...table.getState() };
          newTest.rowEditing[key] = value;
          return newTest;
        }, old);
        // console.log(newState, "------new");
        return newState;
      };
      console.log(safeUpdater(table.getState()), "------safeUpdater");
      table.setState(safeUpdater);
    };

    // table.onHandle = (key:string, value:string)
    // table.handleEditingRow = (key: string, value: string) => {
    //   table.setState((prevState) => {
    //     const newRowEditing = {
    //       ...prevState.rowEditing,
    //       [key]: value,
    //     };
    //     functionalUpdate((prevState) => {
    //       console.log("asdsad", prevState);
    //       return prevState;
    //     }, table);

    //     makeStateUpdater("rowEditing", table);
    //     return {
    //       ...prevState,
    //       rowEditing: newRowEditing,
    //     };
    //   });
    // };

    table.resetAddNewRow = () => {
      table.setState((oldState) => ({
        ...oldState,
        rowEditing: {},
      }));
    };
  },
};
