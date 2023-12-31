const Todo = ({ todo, index, todos, setTodos }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (v.id == todo.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });

    setTodos(newTodos);
  };

  const onClickDelete = () => {
    const newTodos = todos.filter((v, i) => {
      if (v.id !== todo.id) {
        return v;
      }
    });

    setTodos(newTodos);
  };

  return (
    <li className={`w-96 p-4 ${index % 2 ? "bg-gray-300" : "bg-gray-100"} `}>
      <span className="w-1/6 inline-block text-center">{todo.id}</span>
      <button
        className={`pl-4 w-3/4 inline-block ${todo.isDone && "line-through"}`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button
        className="w-1/12 inline-block text-center hover:text-red-600"
        onClick={onClickDelete}
      >
        Del
      </button>
    </li>
  );
};

export default Todo;
