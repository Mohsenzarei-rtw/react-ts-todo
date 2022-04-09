/* eslint-disable no-sequences */
import React, { useState } from "react";
import styles from "../styles/AddTodo.module.css";
import { useAppDispatch } from "../redux/hooks";
import { add, clearTodoList } from "../redux/todos/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleAddTodo(): void {
    if (todo) {
      dispatch(add(todo));
      setTodo("");
    }
  }

  return (
    <section className={styles.background}>
      <div className={styles.addTodoContent}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className={styles.inputTodo}
          type={"text"}
        />
        <button className={styles.AddTodoBtn} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <span
        className={styles.clearList}
        onClick={() => dispatch(clearTodoList())}
      >
        clear list
      </span>
    </section>
  );
}

export default AddTodo;
