type TodoPostRequestBodyType = {
  id: string;
  content: string;
};

type TodoDeleteRequestBodyType = {
  id: string;
};
type TodoUpdateRequestBodyType = {
  id: string;
  content: string;
  done: boolean;
};

type TodoExistRequestBodyType = {
  id: string;
};
