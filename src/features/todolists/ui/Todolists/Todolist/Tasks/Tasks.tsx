import List from "@mui/material/List";
import { TaskStatus } from "common/enums";
import { DomainTodolist } from "../../../../model/todolistsSlice";
import { Task } from "./Task/Task";
import { useGetTasksQuery } from "features/todolists/api/tasksApi";

type Props = {
  todolist: DomainTodolist;
};

export const Tasks = ({ todolist }: Props) => {
  const { data: tasks } = useGetTasksQuery(todolist.id);

  let tasksForTodolist = tasks?.items;

  if (todolist.filter === "active") {
    tasksForTodolist = tasksForTodolist?.filter(
      (task) => task.status === TaskStatus.New
    );
  }

  if (todolist.filter === "completed") {
    tasksForTodolist = tasksForTodolist?.filter(
      (task) => task.status === TaskStatus.Completed
    );
  }

  return (
    <>
      {tasksForTodolist?.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <List>
          {tasksForTodolist?.map((task) => {
            return <Task key={task.id} task={task} todolist={todolist} />;
          })}
        </List>
      )}
    </>
  );
};
