const Todo = ({ todo, index }) => {
  return (
    <li className={`w-96 p-4 ${index % 2 ? "bg-gray-300" : "bg-gray-100"}`}>
      <span className="w-1/6 inline-block text-center">{todo.id}</span>
      <span className="pl-4 w-3/4 inline-block">{todo.title}</span>
      <button className="w-1/12 inline-block text-center hover:text-red-600">
        Del
      </button>
    </li>
  );
};

export default Todo;
