import { useEffect, useState } from "react";
import List from "./components/List";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const addTo = (e) => {
    const input = document.querySelector("#todoInput");
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: input.value,
        status: false,
      },
    ]);
    input.value = "";
  };
  const updateTodo = (e) => {
    const id = e.target.dataset.id;
    const newTodoList = todoList.map((todo) => {
      if (todo.id === Number(id)) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodoList([...newTodoList]);
  };
  const removeAllTodo = () => {
    setTodoList([]);
  };
  return (
    <div>
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React ToDoList</h1>
          <div className="flex">
            <input
              id="todoInput"
              type="text"
              className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0"
              placeholder="請輸入你的代辦事項"
            />
            <button
              onClick={addTo}
              className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700"
            >
              +
            </button>
          </div>
          <List todoList={todoList} updateTodo={updateTodo} />
          <div className="flex justify-between items-center">
            <p>
              目前有 <span className="font-medium">{todoList.length}</span>{" "}
              個事項待完成
            </p>

            <button
              onClick={removeAllTodo}
              type="button"
              className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700"
            >
              Clear All Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
