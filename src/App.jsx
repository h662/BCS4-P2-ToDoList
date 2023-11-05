import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "🧹 청소하기",
      isDone: false,
    },
  ]);

  return (
    <main className="min-h-screen py-20 flex flex-col justify-start items-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-pink-300"
          type="text"
        />
        <input
          className="px-4 py-2 bg-pink-300 active:bg-pink-600 ml-4 rounded-md shadow-md"
          type="submit"
          value="추 가"
        />
      </form>
      <ul className="mt-8">
        {todos.map((v, i) => (
          <li className="bg-gray-100 w-96 p-4">
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
