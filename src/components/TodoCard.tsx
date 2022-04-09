import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { remove, toggleComplete, edit } from "../redux/todos/todoSlice";

import "../styles/todoCard.css";

type todoType = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: todoType;
};

function TodoCard({ todos }: Props) {
  const [title, setTitle] = useState<string>(todos.title);
  const [editTodo, setEditTodo] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  function handleChange() {
    dispatch(edit({ id: todos.id, title: title }));

    setEditTodo(true);
  }

  return (
    <div className="todoCard">
      <input
        disabled={editTodo}
        className="todoTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="CTA">
        {editTodo ? (
          <button className={"btn edit"} onClick={() => setEditTodo(false)}>
            edit
          </button>
        ) : (
          <button className={"btn set"} onClick={handleChange}>
            set
          </button>
        )}

        <button
          className="btn remove"
          onClick={() => dispatch(remove(todos.id))}
        >
          delete
        </button>
        {todos.completed ? (
          <button
            onClick={() => dispatch(toggleComplete(todos.id))}
            className={"btn unDone"}
          >
            unDone
          </button>
        ) : (
          <button
            onClick={() => dispatch(toggleComplete(todos.id))}
            className={"btn done"}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoCard;
