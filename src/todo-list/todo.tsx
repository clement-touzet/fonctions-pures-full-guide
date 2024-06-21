import { TodoType } from "./todos";

type Props = {
  todo: TodoType;
  handleDeleteTodo: (id: TodoType["id"]) => void;
};

const Todo = ({ todo, handleDeleteTodo }: Props) => {
  const handleClickDelete = () => {
    handleDeleteTodo(todo.id);
  };

  let nameWithBrackets = "[" + todo.name + "]";
  nameWithBrackets += " !";

  return (
    <div style={{ display: "flex" }}>
      <p style={{ padding: "5px" }}>{nameWithBrackets}</p>
      <input type="button" value="delete task" onClick={handleClickDelete} />
    </div>
  );
};

export default Todo;
