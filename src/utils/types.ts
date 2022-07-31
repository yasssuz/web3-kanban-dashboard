export interface BoardInterface {
  title: string;
  guid: string;
}

export interface BoardColumn {
  boardGuid: string;
  columns: { title: string; guid: string }[];
}
