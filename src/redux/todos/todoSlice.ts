/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type todos = {
  id: number;
  title: string;
  completed: boolean;
};
export interface TodoState {
  todosList: todos[];
}

const initialState: TodoState = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const id = Date.now();
      state.todosList.push({ id, title: action.payload, completed: false });
    },
    clearTodoList: (state) => {
      state.todosList = [];
    },
    find: (state, action: PayloadAction<string>) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.title === action.payload
      );
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      let index = state.todosList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todosList[index].completed = !state.todosList[index].completed;
    },
    edit: (state, action: PayloadAction<any>) => {
      const { id, title } = action.payload;
      let index = state.todosList.findIndex((todo) => todo.id === id);
      state.todosList[index].title = title;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, clearTodoList, remove, find, toggleComplete, edit } =
  todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.todosList;

export default todoSlice.reducer;
