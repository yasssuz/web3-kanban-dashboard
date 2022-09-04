export interface BoardInterface {
  title: string;
  guid: string;
}

export interface BoardColumn {
  boardGuid: string;
  columns: ColumnInterface[];
}

export interface ColumnInterface {
  title: string;
  guid: string;
}

export interface ColumnTask {
  columnGuid: string;
  tasks: TaskInterface[];
}

export interface TaskInterface {
  guid: string;
  title: string;
  description: string;
}

export interface TaskSubtask {
  taskGuid: string;
  title: string;
  status: "not-completed" | "completed";
}
