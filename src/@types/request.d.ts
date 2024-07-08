export type TodoPostRequestBodyType = {
  email: string;
  content: string;
};

export type TodoDeleteRequestBodyType = {
  id: number;
  email: string;
};
export type TodoUpdateRequestBodyType = {
  id: number;
  email: string;
  content: string;
};
