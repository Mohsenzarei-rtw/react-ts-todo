import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

type Props = {};

function Home({}: Props) {
  return (
    <section>
      <div className="Head">TODO TASK!</div>
      <AddTodo />
      <Todos />
    </section>
  );
}

export default Home;
