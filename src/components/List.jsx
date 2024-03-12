const List = ({ todoList, updateTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li className="py-4" key={todo.id} data-id={todo.id}>
            <label className={todo.status ? "line-through" : ""}>
              <input
                onChange={updateTodo}
                data-id={todo.id}
                type="checkbox"
                className="mr-2"
                checked={todo.status}
              />
              {todo.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
