export interface BoardInterface {
  title: string;
  path: string;
}

export interface BoardColumn {
  path: string;
  columns: { title: string; guid: string }[];
}
