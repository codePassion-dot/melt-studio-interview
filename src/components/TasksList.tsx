import TodoModel from "../TodoModel";
import Todo from "@components/Todo";
interface Props {
  todos: TodoModel[];
}
const TasksList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto">
      {todos.map(({ text, isDone, id }) => {
        return <Todo key={id} text={text} isDone={isDone} />;
      })}
    </div>
  );
};

export default TasksList;
