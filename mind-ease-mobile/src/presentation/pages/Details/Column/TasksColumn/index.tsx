import { TaskList } from "../../Task/TaskList";
import { TTasksColumn } from "./interface";
import { TasksColumnContainer } from "./TasksColumnContainer";

export const TasksColumn = ({
  boardColor,
  boardId,
  columnId,
  columnName,
}: TTasksColumn) => {
  return (
    <TasksColumnContainer
      boardColor={boardColor!}
      boardId={boardId}
      columnName={columnName}
      columnId={columnId}
    >
      <TaskList boardId={boardId} columnId={columnId} />
    </TasksColumnContainer>
  );
};

