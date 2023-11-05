import { useState } from "react";

const CreateTodo = ({ todoIds, setTodoIds, todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    setTodos([...todos, { id: todoIds, title: newTodo, isDone: false }]);
    setTodoIds(todoIds + 1);
    setNewTodo("");
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmitNewTodo}>
      <input
        className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-pink-300"
        type="text"
        value={newTodo}
        onChange={onChangeNewTodo}
      />
      <input
        className="px-4 py-2 bg-pink-300 active:bg-pink-600 ml-4 rounded-md shadow-md"
        type="submit"
        value="추 가"
      />
    </form>
  );
};

export default CreateTodo;
