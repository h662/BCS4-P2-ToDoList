import { useState } from "react";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  const [todoIds, setTodoIds] = useState(2);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "🧹 청소하기",
      isDone: false,
    },
  ]);

  return (
    <main className="min-h-screen py-20 flex flex-col justify-start items-center">
      <CreateTodo
        todoIds={todoIds}
        setTodoIds={setTodoIds}
        todos={todos}
        setTodos={setTodos}
      />
      <ul className="mt-8">
        {todos.map((v, i) => (
          <li key={i} className="bg-gray-100 w-96 p-4">
            <span className="w-1/6 inline-block text-center">{v.id}</span>
            <span className="pl-4 w-3/4 inline-block">{v.title}</span>
            <button className="w-1/12 inline-block text-center">Del</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
