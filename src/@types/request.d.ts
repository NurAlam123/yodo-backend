export type TodoPostRequestBodyType = {
  content: string;
};

export type TodoDeleteRequestBodyType = {
  id: number;
};
export type TodoUpdateRequestBodyType = {
  id: number;
  content: string;
};
