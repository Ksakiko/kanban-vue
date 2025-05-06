import type { InputTodo, Todo } from "./types";

const url = "http://localhost:3000/todos";

export const getAllTodos = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postNewTodo = async (todo: InputTodo) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateListIdToBelong = async (todoId: string, listId: string) => {
  try {
    const res = await fetch(`${url}/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        listId,
      }),
    });
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const res = await fetch(`${url}/${todoId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
