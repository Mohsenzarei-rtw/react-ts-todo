import styles from "../styles/Todos.module.css";
import { useAppSelector } from "../redux/hooks";
import TodoCard from "./TodoCard";

function Todos() {
  const todosList = useAppSelector((state) => state.todo.todosList);

  return (
    <section className={styles.todos}>
      {todosList.length === 0 ? (
        <div className={styles.clearTodoTxt}>there isn't todo</div>
      ) : (
        <>
          <div className={styles.notCompleted}>
            {todosList
              .filter((todos) => !todos.completed)
              .map((todos) =>
                todos ? (
                  <TodoCard todos={todos} />
                ) : (
                  <span>there is not todo</span>
                )
              )}
          </div>
          <div className={styles.Completed}>
            {todosList
              .filter((todos) => todos.completed)
              .map((todos) =>
                todos ? (
                  <TodoCard todos={todos} />
                ) : (
                  <span>there is not todo</span>
                )
              )}
          </div>
        </>
      )}
    </section>
  );
}

export default Todos;
