import { useState } from "react";
import TodoModel from "TodoModel";
import DateHeader from "@components/Date";
import TasksList from "@components/TasksList";
const TodoList = () => {
  const [todo, setTodo] = useState<TodoModel>();
  const fakeTodos: TodoModel[] = [
    { text: "First Task", isDone: false, id: Math.floor(Math.random() * 100) },
    { text: "Second Task", isDone: false, id: Math.floor(Math.random() * 100) },
  ];
  const [todos, setTodos] = useState<TodoModel[]>(fakeTodos);

  const handleOnClick = () => {
    setTodos([
      ...todos,
      Object.assign(todo, {
        id: Math.floor(Math.random() * 100),
      }),
    ]);
  };
  return (
    <div className="mx-auto flex w-fit flex-col p-4">
      <div className="flex flex-row">
        <DateHeader />
        <h2 className="mx-auto">TUESDAY</h2>
      </div>
      <TasksList todos={todos} />
      <div className="flex flex-row">
        <input
          type="text"
          onChange={(event) => {
            setTodo({ text: event.target.value, id: 0, isDone: false });
          }}
        />
        <button onClick={handleOnClick}>Click me</button>
      </div>
    </div>
  );
};

export default TodoList;
